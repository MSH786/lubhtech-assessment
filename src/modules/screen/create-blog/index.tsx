import { SafeAreaView, ScrollView, View } from 'react-native';
import React from 'react';
import { ParamListBase, useRoute } from '@react-navigation/native';

import BlogForm from '../../../components/organisms/blog-form';
import Header from '../../../components/molecules/header';
import { isDarkTheme } from '../../../utilities/get-theme';
import { styles } from './styles';

const CreateBlog = () => {
  const { params } = useRoute<ParamListBase | any>();

  return (
    <SafeAreaView
      style={isDarkTheme() ? styles.blogDarkContainer : styles.blogContainer}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.blogInnerContainer}
      >
        <Header back />
        <BlogForm {...params} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateBlog;
