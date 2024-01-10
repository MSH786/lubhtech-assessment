import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",

    zIndex: 10,
  },
  modalView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
    position: "absolute",
    bottom: 0,
    zIndex: 999,
  },
  topIcon: {
    width: 30,
    height: 4,
    borderRadius: 100,
    backgroundColor: "grey",
    marginBottom: 10,
  },
});
