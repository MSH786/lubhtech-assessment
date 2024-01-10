import {StyleSheet} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utilities/responsive";
import {theme} from "../../../config/theme";

export const styles = StyleSheet.create({
  titleCardContainer: {
    backgroundColor: "#209fa5",
    marginTop: heightPercentageToDP(5),
    alignItems: "center",
    paddingVertical: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(1.7),
  },
  blogTitleContainer: {width: "60%", alignItems: "center"},
  title: {
    color: "#fff",
    fontSize: heightPercentageToDP(2.6),
    fontWeight: "600",
    letterSpacing: heightPercentageToDP(0.1),
  },
  cardButtonContainer: {
    marginTop: heightPercentageToDP(2),
    backgroundColor: "#fff",
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: heightPercentageToDP(0.8),
    borderRadius: heightPercentageToDP(0.8),
  },
  buttonTitle: {color: theme.color.success.original},
});
