import {View, Text, FlatList, Pressable, Switch, Alert} from "react-native";
import auth from "@react-native-firebase/auth";

import {settingTab} from "./utils";
import CompleteProfileForm from "../complete-profile-form";
import {styles} from "./styles";
import useTheme from "../../../context/theme-context";
import {theme} from "../../../config/theme";
import {useTranslation} from "react-i18next";
import {GoogleSignin} from "@react-native-google-signin/google-signin";
import {useEffect} from "react";
import {deleteUserAccount} from "../../../utilities/helpers/user";
import {deleteAllUserBlogs} from "../../../utilities/helpers/blog";
import {deleteUserProfile} from "../../../utilities/helpers/user-profile";
import LanguageSelector from "../language-selector";
import {useDispatch} from "react-redux";
import {resetStatesCreators} from "../../../redux/actions/reset-states/reset-states.action";
// import auth from "@react-native-firebase/auth";

const SettingTab = () => {
  const dispatch = useDispatch();

  const {t} = useTranslation();
  const {theme: appTheme, toggleTheme}: any = useTheme();

  const isDarkTheme = appTheme === "dark";
  const toggleSwitch = () => {
    const newTheme = appTheme === "light" ? "dark" : "light";
    toggleTheme(newTheme);
  };

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "490426232779-pfqct1fsdl20ps9qsk5amb3l4f0nntue.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);

  const deleteAccount = async () => {
    try {
      // google account disconnected from your app.
      const response = await deleteUserAccount();
      if (!response?.success) {
        Alert.alert(
          "Warning",
          "This is sensitive operation! Kindly login and try again."
        );
      }
      // deleting all user related data
      await deleteAllUserBlogs();
      await deleteUserProfile();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.settingTabContainer}>
      <FlatList
        data={settingTab}
        ItemSeparatorComponent={(<View style={styles.itemSeparater} />) as any}
        renderItem={({item}) => {
          return (
            <Pressable style={styles.tabContainer}>
              <View style={styles.titleContainer}>
                <Text
                  onPress={() => {
                    if (item?.title == "Logout") {
                      auth()
                        .signOut()
                        .then(() => {
                          dispatch(resetStatesCreators.resetAllStates());
                          Alert.alert(t("common:user_signed_out"));
                        });
                    } else if (item?.title == "Delete Account") {
                      deleteAccount();
                    }
                  }}
                  style={[
                    styles.title,
                    {
                      color: item?.color || (isDarkTheme ? "#fff" : "#000"),
                    },
                  ]}
                >
                  {item?.title}
                </Text>
              </View>
              {item?.switch ? (
                <View style={styles.switchContainer}>
                  <Switch
                    thumbColor={"#FFFFFF"}
                    trackColor={{
                      false: "#767577",
                      true: theme.color.success.original,
                    }}
                    onValueChange={toggleSwitch}
                    value={isDarkTheme}
                  />
                </View>
              ) : null}
            </Pressable>
          );
        }}
      />
      <CompleteProfileForm />
      <LanguageSelector />
    </View>
  );
};

export default SettingTab;
