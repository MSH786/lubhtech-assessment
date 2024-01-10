import React from "react";
import Login from "../../../modules/screen/auth/login/login";

import {Stack} from "../../../utilities/navigation";

const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="LoginScreen"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="LoginScreen" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthStack;
