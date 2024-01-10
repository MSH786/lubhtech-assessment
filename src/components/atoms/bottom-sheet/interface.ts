import {ReactNode} from "react";

export interface IBottomSheet {
  modalVisible: boolean;
  onRequestClose: () => void;
  children: ReactNode;
}
