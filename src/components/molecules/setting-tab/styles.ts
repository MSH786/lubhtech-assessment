import {Dimensions, StyleSheet} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utilities/responsive";

const {width} = Dimensions.get("screen");

export const styles = StyleSheet.create({
  settingTabContainer: {width: width, marginTop: heightPercentageToDP(2.5)},
  itemSeparater: {height: heightPercentageToDP(3), width: width},
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: width,
    height: heightPercentageToDP(5),
  },
  titleContainer: {width: (width / 100) * 60},
  title: {
    marginLeft: widthPercentageToDP(5.5),
    fontSize: heightPercentageToDP(1.8),
  },
  switchContainer: {
    width: (width / 100) * 40,
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: heightPercentageToDP(1.9),
  },
});
