import {StyleSheet} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utilities/responsive";
import {theme} from "../../../config/theme";

export const styles = StyleSheet.create({
  container: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: heightPercentageToDP(0.5),
  },
  greeting: {
    fontSize: heightPercentageToDP(1.8),
    fontFamily: "Poppins-Regular",
  },
  title: {
    fontSize: heightPercentageToDP(1.8),
    fontFamily: "Poppins-Regular",
    color: theme.color.success.original,
  },
  backContainer: {flexDirection: "row", alignItems: "center"},
  backTitle: {
    fontSize: heightPercentageToDP(1.7),
    fontFamily: "Poppins-Medium",
    color: theme.color.success.original,
    marginLeft: 5,
  },
});
