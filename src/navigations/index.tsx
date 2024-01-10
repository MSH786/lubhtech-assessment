import React, {useEffect, useState} from "react";
import {NavigationContainer} from "@react-navigation/native";

import {navigationRef} from "../utilities/navigation";
import AuthStack from "./stacks/auth-stacks";
import ProtectedStack from "./stacks/protected-stacks";
import auth from "@react-native-firebase/auth";

const Navigation = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<any>();

  function onAuthStateChanged(user: any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {!user ? <AuthStack /> : <ProtectedStack />}
    </NavigationContainer>
  );
};

export default Navigation;
