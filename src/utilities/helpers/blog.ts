import firestore from "@react-native-firebase/firestore";
import {collection} from "../../components/organisms/home-blog/utils/constants";
import auth from "@react-native-firebase/auth";

export const getUserBlogs = async (userId: string) => {
  try {
    const querySnapshot = await firestore()
      .collection(collection.BLOG)
      .where("user_id", "==", userId)
      .get();

    const records = querySnapshot.docs.map((documentSnapshot) => ({
      id: documentSnapshot.id,
      ...documentSnapshot.data(),
    }));

    return records;
  } catch (error: any) {
    console.error("Error fetching records:", error.message);
  }
};

export const createUserBlog = async (payload: IBlog): Promise<IBlog> => {
  try {
    const {title, category, description, user_id, image} = payload;

    const docRef = await firestore().collection("blog").add({
      title,
      category,
      description,
      image,
      user_id,
    });

    const docSnapshot = await docRef.get();

    if (docSnapshot.exists) {
      const createdBlog = {
        id: docSnapshot.id,
        ...docSnapshot.data(),
      } as IBlog;

      return createdBlog;
    } else {
      throw new Error("Error fetching the created blog post.");
    }
  } catch (error: any) {
    console.error("Error adding blog post:", error.message);
    throw error; // Re-throw the error to handle it further up the call stack if needed
  }
};

export const updateUserBlog = async (
  blogId: string,
  payload: IBlog
): Promise<IUpdateResult> => {
  try {
    const documentRef = firestore().collection("blog").doc(blogId);
    const snapshot = await documentRef.get();

    if (snapshot.exists) {
      await documentRef.update(payload);

      const updatedSnapshot = await documentRef.get();
      const updatedBlog = {
        id: updatedSnapshot.id,
        ...updatedSnapshot.data(),
      } as IBlog;

      return {
        success: true,
        message: "Document updated successfully.",
        updatedBlog,
      };
    } else {
      return {success: false, message: "Document not found."};
    }
  } catch (error: any) {
    console.error("Error updating document:", error.message);
    return {success: false, message: "Error updating document."};
  }
};

export const deleteUserBlog = async (blogId: string) => {
  try {
    const documentRef = firestore().collection(collection.BLOG).doc(blogId);
    const snapshot = await documentRef.get();

    if (snapshot.exists) {
      await documentRef.delete();
      return {success: true, message: "Document deleted successfully."};
    } else {
      return {success: false, message: "Document not found."};
    }
  } catch (error: any) {
    console.error("Error deleting document:", error.message);
    return {success: false, message: "Error deleting document."};
  }
};

export const deleteAllUserBlogs = async () => {
  let user = auth().currentUser;
  try {
    const blogCollectionRef = firestore().collection(collection.BLOG);
    const querySnapshot = await blogCollectionRef
      .where("user_id", "==", user?.uid)
      .get();

    const deletePromises: Promise<void>[] = [];

    querySnapshot.forEach((doc) => {
      const deletePromise = doc.ref.delete();
      deletePromises.push(deletePromise);
    });

    await Promise.all(deletePromises);
  } catch (error: any) {
    console.log("Error deleting blog documents:", error.message);
  }
};
