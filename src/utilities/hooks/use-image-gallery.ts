import {Alert, PermissionsAndroid, Platform} from "react-native";
import ImageCropPicker from "react-native-image-crop-picker";

const useImageGallery = (setBlogImage: any = null) => {
  const openImageCropPicker = () => {
    ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      mediaType: "photo",
    })
      .then(async (file) => {
        setBlogImage(file?.path);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const getImageFromGallery = async () => {
    if (Platform.OS == "android") {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.READ_MEDIA_IMAGES
        );
        openImageCropPicker();
      } else if (granted == "never_ask_again") {
        Alert.alert("Permission", `Please go to app info and allow permission`);
      } else {
        getImageFromGallery();
      }
    } else {
      openImageCropPicker();
    }
  };

  return {
    getImageFromGallery,
  };
};

export default useImageGallery;
