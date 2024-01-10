import { View, Text, Dimensions, Pressable } from "react-native";
import React from "react";

import { styles } from "./styles";
import { isDarkTheme } from "../../../utilities/get-theme";
import { useDispatch } from "react-redux";
import { blogsCreators } from "../../../modules/screen/home/redux/blog.actions";

const RenderCategory = ({ category }: { category: ICategory }) => {
  const dispatch = useDispatch()
  return (
    <Pressable style={styles.categoriesContainer} onPress={() => dispatch(blogsCreators.filterBlogs(category?.title))}>
      <View
        style={[
          styles.categoryIconContainer,
          { backgroundColor: category?.color },
        ]}
      >
        {category.icon}
      </View>
      <Text style={[styles.title, { color: isDarkTheme() ? "#fff" : "#000" }]}>
        {category?.title}
      </Text>
    </Pressable>
  );
};

export default RenderCategory;
