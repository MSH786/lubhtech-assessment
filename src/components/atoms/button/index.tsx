import { Text, TouchableOpacity } from "react-native";
import React from "react";

import { styles } from "./styles";
import { ActivityIndicator } from "react-native";

const Button = ({ title, onPress, width, isLoading }: IButton) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { width: width ?? "100%" }]}
    >
      {isLoading ?
        <ActivityIndicator />
        :
        <Text style={styles.buttonTitle}>{title}</Text>
      }
    </TouchableOpacity>
  );
};

export default Button;
