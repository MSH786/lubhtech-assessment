import {StyleSheet} from "react-native";
import {heightPercentageToDP} from "../../../utilities/responsive";
import {theme} from "../../../config/theme";

export const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: heightPercentageToDP(2),
  },
  categoryTitle: {
    fontSize: heightPercentageToDP(2.2),
    fontFamily: "Poppins-Medium",
  },
  rightTitleContainer: {
    fontSize: heightPercentageToDP(1.6),
    marginTop: heightPercentageToDP(1),
    color: theme.color.success.original,
    fontFamily: "Poppins-Medium",
  },
});
