import {StyleSheet} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utilities/responsive";
import {theme} from "../../../config/theme";

export const styles = StyleSheet.create({
  cardContainer: {
    borderWidth: 2,
    borderRadius: heightPercentageToDP(1.6),
    paddingHorizontal: widthPercentageToDP(4),
    paddingVertical: 13,
    borderColor: "#E5E4E2",
    backgroundColor: "#fcfdff",
    marginBottom: heightPercentageToDP(1),
  },
  blogImage: {
    height: heightPercentageToDP(22),
    width: "100%",
    borderRadius: heightPercentageToDP(1.6),
  },
  blogInnerContainer: {width: "100%", marginTop: 15},
  blogHeading: {
    fontSize: heightPercentageToDP(1.8),
    fontWeight: "500",
    fontFamily: "Poppins-Medium",
  },
  blogInnerTitleContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  blogTitle: {
    fontSize: heightPercentageToDP(1.4),
    fontWeight: "500",
    fontFamily: "Poppins-Regular",
  },
  actionTitle: {
    marginTop: heightPercentageToDP(0.2),
    color: theme.color.success.original,
  },
  blogDescription: {
    fontSize: heightPercentageToDP(1.4),
    fontWeight: "400",
    marginTop: 5,
    fontFamily: "Poppins-Regular",
  },
  actionContainer: {
    display: "flex",
    flexDirection: "row",
    width: "23%",
    justifyContent: "space-between",
  },
});
