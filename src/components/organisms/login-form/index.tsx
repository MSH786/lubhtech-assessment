import {Image, Text, View, Alert} from "react-native";
import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

import Form from "../../molecules/form";
import {LoginInitialValues} from "../../../utilities/initial-values";
import {LoginFields} from "./utils/constants";
import {loginValidationSchema} from "../../molecules/form/utils/validation-schema";
import {styles} from "./styles";
import {
  GoogleSignin,
  GoogleSigninButton,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";
import {useDispatch} from "react-redux";
import {userCreators} from "../../../redux/actions/user/user.action";

const LoginForm = () => {
  const {t} = useTranslation();
  const dispatch = useDispatch();
  useEffect(() => {
    GoogleSignin.configure({
      // scopes: ['profile', 'email'],
      webClientId:
        "490426232779-pfqct1fsdl20ps9qsk5amb3l4f0nntue.apps.googleusercontent.com",
      offlineAccess: true,
    });
  }, []);

  async function onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });
      await GoogleSignin.signOut();
      const userInfo = await GoogleSignin.signIn();

      dispatch(userCreators.setUser(userInfo.user));
      // Create a Google credential with the token
      const googleCredential = auth.GoogleAuthProvider.credential(
        userInfo.idToken
      );
      // Sign-in the user with the credential
      return auth().signInWithCredential(googleCredential);
    } catch (error) {
      console.log(error);
    }
  }

  const onSubmit = (values: IFormValues) => {
    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        dispatch(userCreators.setUser(user));
        Alert.alert(t("common:user_account_created"));
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          onHandleLogin(values);
        }

        if (error.code === "auth/invalid-email") {
          Alert.alert("That email address is invalid!");
        }
        console.log(error);
      });
  };

  const onHandleLogin = (values: IFormValues) => {
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        dispatch(userCreators.setUser(user));
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Alert.alert(error.message);
      });
  };

  return (
    <View style={styles.loginFormContainer}>
      <View style={styles.imageInnerContainer}>
        <Image
          source={{
            uri: "https://img.icons8.com/clouds/100/000000/login-rounded-right.png",
          }}
          style={styles.imageContainer}
        />
      </View>
      <Form
        initialValues={LoginInitialValues}
        fields={LoginFields}
        buttonTitle={t("common:login")}
        validationSchema={loginValidationSchema}
        onSubmit={onSubmit}
      />

      <View style={styles.bottomContainer}>
        <View>
          <Text style={styles.separtaterTitle}>
            {t("common:or_continue_with")}
          </Text>
        </View>
        <View style={styles.googleButtonContainer}>
          <GoogleSigninButton
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={onGoogleButtonPress}
            disabled={false}
            style={styles.googleButtonStyle}
          />
        </View>
      </View>
    </View>
  );
};

export default LoginForm;
