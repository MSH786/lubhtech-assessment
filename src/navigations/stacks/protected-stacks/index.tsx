import React from "react";

import Home from "../../../modules/screen/home";
import Detail from "../../../modules/screen/detail";
import {Stack} from "../../../utilities/navigation";

import CreateBlog from "../../../modules/screen/create-blog";
import Settings from "../../../modules/screen/settings";

const ProtectedStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}
    >
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="DetailScreen" component={Detail} />

      <Stack.Screen name="CreateBlog" component={CreateBlog} />
      <Stack.Screen name="SettingScreen" component={Settings} />
    </Stack.Navigator>
  );
};

export default ProtectedStack;
