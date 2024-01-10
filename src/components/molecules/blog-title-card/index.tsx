import { View, Text } from 'react-native';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { heightPercentageToDP } from '../../../utilities/responsive';
import { styles } from './styles';

const BlogTitleCard = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.titleCardContainer}>
      <View style={styles.blogTitleContainer}>
        <Text style={styles.title}>{t('common:start_your')}</Text>
        <Text
          style={[
            styles.title,
            {
              marginTop: heightPercentageToDP(0.3),
            },
          ]}
        >
          {t('common:own_reviewing')}
        </Text>
        <View style={styles.cardButtonContainer}>
          <Text style={styles.buttonTitle}>{t('common:blog_app')}</Text>
        </View>
      </View>
    </View>
  );
};

export default BlogTitleCard;
