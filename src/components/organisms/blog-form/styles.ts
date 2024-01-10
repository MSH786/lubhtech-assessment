import {StyleSheet} from "react-native";

import {heightPercentageToDP} from "../../../utilities/responsive";
import {theme} from "../../../config/theme";

export const styles = StyleSheet.create({
  blogFormContainer: {
    marginTop: heightPercentageToDP(1.5),
  },
  blogTitle: {
    fontSize: heightPercentageToDP(3),
    fontFamily: "Poppins-Regular",
    color: theme.color.success.original,
    marginBottom: heightPercentageToDP(2),
  },
});
