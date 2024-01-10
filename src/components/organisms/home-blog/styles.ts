import {StyleSheet} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utilities/responsive";

export const styles = StyleSheet.create({
  blogInnerContainer: {marginHorizontal: widthPercentageToDP(5), flex: 1},
  blogContent: {width: "100%", marginTop: heightPercentageToDP(3)},
});
