import auth from "@react-native-firebase/auth";

export const deleteUserAccount = async () => {
  try {
    let user = auth().currentUser;

    await user?.delete();
    return {success: true, message: "User deleted successfully."};
  } catch (error: any) {
    return {success: false, message: "Error deleting document."};
  }
};
