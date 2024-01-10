import {StyleSheet} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utilities/responsive";

export const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: heightPercentageToDP(2),
    marginHorizontal: widthPercentageToDP(4),
  },
  bottomSheetContainer: {
    marginVertical: heightPercentageToDP(4),
    marginHorizontal: widthPercentageToDP(1.7),
  },
});
