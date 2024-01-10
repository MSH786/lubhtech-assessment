import React from "react";
import {View, Text, Pressable} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useTranslation} from "react-i18next";

import {Languages} from "./utils/constants";
import {styles} from "./styles";
import {isDarkTheme} from "../../../utilities/get-theme";

const LanguageSelector = () => {
  const {t, i18n} = useTranslation();
  const selectedLanguageCode = i18n.language;

  const setLanguage = (code: any) => {
    return i18n.changeLanguage(code);
  };

  const selectedLanguageColor = isDarkTheme() ? "#fff" : "#000";
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={[styles.title, {color: selectedLanguageColor}]}>
          {t("common:languageSelector")}
        </Text>
        <Ionicons
          color={isDarkTheme() ? "#fff" : "#444"}
          size={28}
          name="language-outline"
        />
      </View>
      {Languages.map((language) => {
        const selectedLanguage = language.code === selectedLanguageCode;

        return (
          <Pressable
            key={language.code}
            style={styles.buttonContainer}
            disabled={selectedLanguage}
            onPress={() => setLanguage(language.code)}
          >
            <Text
              style={[
                selectedLanguage ? styles.selectedText : styles.text,
                {color: selectedLanguage ? "red" : selectedLanguageColor},
              ]}
            >
              {language.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default LanguageSelector;
