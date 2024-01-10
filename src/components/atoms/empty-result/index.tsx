import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import { styles } from './styles';
import { isDarkTheme } from '../../../utilities/get-theme';

const EmptyResults = () => {
  const { t } = useTranslation();
  const navigation: NavigationProp<ParamListBase | any> = useNavigation();
  const textColor = isDarkTheme() ? '#fff' : '#000';
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: textColor }]}>
        {t('common:oops')}
      </Text>
      <Text style={[styles.subTitle, { color: textColor }]}>
        {t('common:no_blogs_found_here')}
      </Text>
      <TouchableOpacity onPress={() => navigation?.navigate('CreateBlog')}>
        <Text style={styles.createBlogLink}>{t('common:create_blog')}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyResults;
