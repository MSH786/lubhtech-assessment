import {Modal, Pressable, View} from "react-native";

import {isDarkTheme} from "../../../utilities/get-theme";
import {IBottomSheet} from "./interface";
import {styles} from "./styles";

const BottomSheet = ({
  modalVisible,
  onRequestClose,
  children,
}: IBottomSheet) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <Pressable
        onPress={onRequestClose}
        style={styles.centeredView}
      ></Pressable>
      <View
        style={[
          styles.modalView,
          {
            backgroundColor: isDarkTheme() ? "#121928" : "white",
          },
        ]}
      >
        <View
          style={{
            alignItems: "center",
          }}
        >
          <View style={styles.topIcon} />
        </View>
        {children}
      </View>
    </Modal>
  );
};

export default BottomSheet;
