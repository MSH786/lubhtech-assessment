import {SafeAreaView} from "react-native";

import Header from "../../../components/molecules/header";
import SettingTab from "../../../components/molecules/setting-tab";
import {isDarkTheme} from "../../../utilities/get-theme";
import {styles} from "./styles";

const Settings = () => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: isDarkTheme() ? "#000" : "#fff"},
      ]}
    >
      <Header back={true} />
      <SettingTab />
    </SafeAreaView>
  );
};

export default Settings;
