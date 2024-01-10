import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from "@react-navigation/native";

import {heightPercentageToDP} from "../../../utilities/responsive";
import {styles} from "./styles";
import {useDispatch} from "react-redux";
import {blogsCreators} from "../../../modules/screen/home/redux/blog.actions";
import {uploadImageOnCloud} from "../../../utilities/upload-image-on-cloud";

const BlogCard = ({item}: {item: IBlog}) => {
  const dispatch = useDispatch();
  const navigation: NavigationProp<ParamListBase | any> = useNavigation();

  return (
    <TouchableOpacity
      style={styles.cardContainer}
      onPress={() => navigation.navigate("DetailScreen", {item})}
    >
      <Image
        source={{
          uri: item.image,
        }}
        resizeMode="cover"
        style={styles.blogImage}
      />
      <View style={styles.blogInnerContainer}>
        <Text style={styles.blogHeading}>{item.title}</Text>
        <View style={styles.blogInnerTitleContainer}>
          <Text
            style={[styles.blogTitle, {fontSize: heightPercentageToDP(1.7)}]}
          >
            {item.category}
          </Text>
          <View style={styles.actionContainer}>
            <Text
              onPress={() => dispatch(blogsCreators.deleteBlog(item?.id))}
              style={[styles.blogTitle, styles.actionTitle]}
            >
              Delete
            </Text>
            <Text
              onPress={() =>
                navigation.navigate("CreateBlog", {
                  editDetails: item,
                  buttonTitle: "Update",
                  onPress: async (item: IBlogParams) => {
                    const {blogImage, ...rest} = item;
                    const image = await uploadImageOnCloud(blogImage!);
                    const payload = {...rest, image: image?.secure_url};
                    dispatch(blogsCreators.updateBlog(payload));
                  },
                })
              }
              style={[styles.blogTitle, styles.actionTitle]}
            >
              Edit
            </Text>
          </View>
        </View>
        <Text style={styles.blogDescription} numberOfLines={1}>
          {item.description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default BlogCard;
