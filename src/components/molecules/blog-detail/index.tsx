import {View, Text, ScrollView, Image} from "react-native";
import React from "react";
import {styles} from "./styles";
import {isDarkTheme} from "../../../utilities/get-theme";

const BlogDetail = ({item}: {item: IBlog}) => {
  return (
    <View style={styles.detailContainer}>
      <Image
        source={{
          uri: item?.image,
        }}
        resizeMode="contain"
        style={styles.imageView}
      />
      <Text style={styles.categoryTitle}>{item?.category}</Text>
      <Text style={[styles.title, {color: !isDarkTheme() ? "#000" : "#fff"}]}>
        {item?.title}
      </Text>

      <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
        <Text
          style={[
            styles.scrollingText,
            {color: !isDarkTheme() ? "#000" : "#fff"},
          ]}
        >
          {item?.description}
        </Text>
      </ScrollView>
    </View>
  );
};

export default BlogDetail;
