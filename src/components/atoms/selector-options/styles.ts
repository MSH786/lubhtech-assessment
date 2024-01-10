import {StyleSheet} from "react-native";

import {heightPercentageToDP} from "../../../utilities/responsive";

export const styles = StyleSheet.create({
  optionsContainer: {
    display: "flex",
    flexDirection: "row",
    marginHorizontal: heightPercentageToDP(2),
  },
  iconContainer: {width: "10%"},
  titleContainer: {width: "90%"},
  title: {
    marginHorizontal: heightPercentageToDP(2),
    marginTop: heightPercentageToDP(2),
    fontFamily: "Poppins-Medium",
    fontSize: heightPercentageToDP(1.9),
  },
});
