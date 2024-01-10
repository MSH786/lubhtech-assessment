import {useState, useEffect} from "react";
import auth from "@react-native-firebase/auth";

function useGetUserId() {
  const [userId, setUserId] = useState("");
  const getAuth = auth();

  useEffect(() => {
    if (getAuth.currentUser?.uid != null) {
      setUserId(getAuth.currentUser?.uid);
    } else {
      setUserId("");
    }
  }, []);

  return userId;
}

export default useGetUserId;
