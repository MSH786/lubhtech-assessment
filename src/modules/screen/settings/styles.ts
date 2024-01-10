import {Dimensions, StyleSheet} from "react-native";

const {width} = Dimensions.get("screen");

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    width: width,
  },
});
