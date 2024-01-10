import {View, FlatList, ActivityIndicator} from "react-native";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import BlogTitleCard from "../../molecules/blog-title-card";
import {categories} from "./utils/constants";
import RenderCategory from "../../molecules/render-category";
import CategoryHeader from "../../molecules/category-header";
import BlogCard from "../../molecules/blog-card";
import useGetUserId from "../../../utilities/hooks/use-get-user-id";
import {blogsCreators} from "../../../modules/screen/home/redux/blog.actions";
import EmptyResults from "../../atoms/empty-result";
import {styles} from "./styles";

const HomeBlog = () => {
  const userId = useGetUserId();
  const dispatch = useDispatch();

  const {blogs, slectedCategory} = useSelector(
    (state: IInitialStates) => state.blogs
  );
  const {isFetchingBlogs} = useSelector(
    (state: IInitialStates) => state.loading
  );

  useEffect(() => {
    fetchRecords();
  }, [userId]);

  const fetchRecords = async () => {
    if (userId) {
      if (!blogs?.length) dispatch(blogsCreators.fetchBlogs(userId));
    }
  };

  return (
    <View style={styles.blogInnerContainer}>
      <BlogTitleCard />
      <View style={styles.blogContent}>
        <FlatList
          data={categories}
          showsHorizontalScrollIndicator={false}
          horizontal
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={({item}) => <RenderCategory category={item} />}
        />
      </View>
      <CategoryHeader title={slectedCategory} />

      {isFetchingBlogs ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={blogs}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => <BlogCard item={item.item} />}
          style={{flex: 1}}
          keyExtractor={(item) => item?.id}
          ListEmptyComponent={<EmptyResults />}
        />
      )}
    </View>
  );
};

export default HomeBlog;
