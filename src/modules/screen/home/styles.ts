import {StyleSheet} from "react-native";
import {widthPercentageToDP} from "../../../utilities/responsive";
import {isDarkTheme} from "../../../utilities/get-theme";

export const styles = StyleSheet.create({
  blogContainer: {
    width: "100%",
    flex: 1,
    alignItems: "center",
  },
  blogInnerContainer: {marginHorizontal: widthPercentageToDP(5), flex: 1},
});
