import {Dimensions, StyleSheet} from "react-native";
import {heightPercentageToDP} from "../../../utilities/responsive";

const {width} = Dimensions.get("screen");

export const styles = StyleSheet.create({
  categoriesContainer: {
    width: (width / 100) * 23,
    alignItems: "center",
  },
  categoryIconContainer: {
    width: "60%",
    aspectRatio: 1 / 1,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: heightPercentageToDP(1.5),
    fontWeight: "400",
    color: "#708090",
    marginTop: heightPercentageToDP(1),
    fontFamily: "Poppins-Medium",
  },
});
