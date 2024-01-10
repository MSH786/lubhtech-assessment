import firestore from '@react-native-firebase/firestore';
import { collection } from '../../components/organisms/home-blog/utils/constants';
import auth from '@react-native-firebase/auth';

export const createUserProfile = async (payload: IUserProfile) => {
  try {
    const { age, bio, user_id } = payload;
    const userProfileRef = firestore().collection(collection.USER_PROFILE);
    const querySnapshot = await userProfileRef
      .where('user_id', '==', user_id)
      .get();

    const userProfileDoc = querySnapshot.docs[0];

    if (userProfileDoc) {
      await userProfileDoc.ref.set(
        {
          age,
          bio,
        },
        { merge: true }
      );
    } else {
      await userProfileRef.add({
        age,
        bio,
        user_id,
      });
    }
  } catch (error: any) {
    console.error('Error adding/updating user profile:', error.message);
  }
};

export const addWelcomeStaus = async (userId: string) => {
  try {
    const userProfile = firestore().collection('user-profile');
    await userProfile.add({
      welcome_status: true,
      user_id: userId,
    });
  } catch (error: any) {
    console.error('Error adding welcome status:', error.message);
  }
};

export const isWelcomeStatusExist = async (userId: string) => {
  try {
    const userProfile = firestore().collection('user-profile');
    const querySnapshot = await userProfile
      .where('user_id', '==', userId)
      .get();

    return querySnapshot;
  } catch (error: any) {
    console.error('Error updating welcome status:', error.message);
  }
};

export const deleteUserProfile = async () => {
  let user = auth().currentUser;
  let userId = user?.uid;
  try {
    const blogCollectionRef = firestore().collection(collection.USER_PROFILE);
    const querySnapshot = await blogCollectionRef
      .where('user_id', '==', userId)
      .get();

    if (querySnapshot.size > 0) {
      const blogDoc = querySnapshot.docs[0];

      await blogDoc.ref.delete();
    } else {
      console.log(`No blog document found with user_id ${userId}.`);
    }
  } catch (error: any) {
    console.error(
      `Error deleting blog document with user_id ${userId}:`,
      error.message
    );
  }
};

export const getUserProfile = async (userId: string) => {
  try {
    const querySnapshot = await firestore()
      .collection(collection.USER_PROFILE)
      .where('user_id', '==', userId)
      .get();

    const records = querySnapshot.docs.map((documentSnapshot) => ({
      id: documentSnapshot.id,
      ...documentSnapshot.data(),
    }));

    return records[0];
  } catch (error: any) {
    console.error('Error fetching records:', error.message);
    return error;
  }
};
