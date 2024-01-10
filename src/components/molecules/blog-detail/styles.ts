import {StyleSheet} from "react-native";
import {heightPercentageToDP} from "../../../utilities/responsive";
import {theme} from "../../../config/theme";

export const styles = StyleSheet.create({
  detailContainer: {width: "90%", marginTop: 30, flex: 1},
  imageView: {
    height: heightPercentageToDP(43),
    width: "100%",
    borderRadius: 25,
  },
  categoryTitle: {
    fontSize: heightPercentageToDP(1.9),
    color: theme.color.success.original,
    fontFamily: "Poppins-Medium",
    marginVertical: 10,
  },
  title: {
    fontSize: heightPercentageToDP(2.2),
    color: "#000",
    fontFamily: "Poppins-Medium",
    marginBottom: 3,
  },
  disableContent: {
    fontSize: heightPercentageToDP(1.5),
    color: "#708090",
    fontFamily: "Poppins-Regular",
    marginBottom: 3,
  },
  scrollingText: {
    marginTop: 10,
    fontSize: heightPercentageToDP(1.5),
    fontFamily: "Poppins-Regular",
    flex: 1,
  },
});
