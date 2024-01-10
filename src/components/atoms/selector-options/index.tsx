import {View, Text, Pressable} from "react-native";

import {isDarkTheme} from "../../../utilities/get-theme";
import {styles} from "./styles";

const SelectorOptions = ({options, onSelectValue}: ISelectorOptions) => {
  return options?.map((item) => (
    <Pressable
      key={item?.id}
      onPress={() =>
        onSelectValue(item?.title == "All" ? "Other" : item?.title)
      }
      style={styles.optionsContainer}
    >
      <View style={styles.iconContainer}>{item?.icon}</View>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {color: isDarkTheme() ? "#fff" : "#000"}]}>
          {item?.title == "All" ? "Other" : item?.title}
        </Text>
      </View>
    </Pressable>
  ));
};

export default SelectorOptions;
