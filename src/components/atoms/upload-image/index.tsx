import {View, Text, Image} from "react-native";
import React from "react";

import UploadIcon from "../svgs/upload";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "../../../utilities/responsive";
import {styles} from "./styles";
import {isDarkTheme} from "../../../utilities/get-theme";

const UploadImage = ({blogImage}: {blogImage: string}) => {
  return (
    <View style={styles.uploadImageContainer}>
      <View style={styles.innerContainer}>
        {blogImage ? (
          <Image
            source={{
              uri: blogImage,
            }}
            resizeMode="cover"
            style={{
              width: heightPercentageToDP(15),
              height: heightPercentageToDP(15),
            }}
          />
        ) : (
          <>
            <UploadIcon
              width={widthPercentageToDP(7)}
              height={heightPercentageToDP(5.7)}
              fill={isDarkTheme() ? "#fff" : null}
            />
            <Text
              style={[
                styles.buttonTitle,
                {color: isDarkTheme() ? "#fff" : "#9ca9c4"},
              ]}
            >
              Upload Image
            </Text>
          </>
        )}
      </View>
    </View>
  );
};

export default UploadImage;
