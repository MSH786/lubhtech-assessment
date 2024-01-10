import { Text, View } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';

import { isDarkTheme } from '../../../utilities/get-theme';
import { styles } from './styles';

const CategoryHeader = ({ title }: { title: string }) => {
  const { t } = useTranslation();
  const navigation: NavigationProp<ParamListBase | any> = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Text
        style={[
          styles.categoryTitle,
          { color: isDarkTheme() ? '#fff' : '#000' },
        ]}
      >
        {title}
      </Text>
      <Text
        style={styles.rightTitleContainer}
        onPress={() => navigation.navigate('CreateBlog')}
      >
        {t('common:create')}
      </Text>
    </View>
  );
};

export default CategoryHeader;
