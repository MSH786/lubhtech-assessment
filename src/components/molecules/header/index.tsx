import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import {
  NavigationProp,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../utilities/responsive';
import SettingIcon from '../../atoms/svgs/setting';
import BackIcon from '../../atoms/svgs/back';
import { styles } from './styles';
import { isDarkTheme } from '../../../utilities/get-theme';

const Header = ({ back, title, setting }: IHeader) => {
  const { t } = useTranslation();
  const navigation: NavigationProp<ParamListBase | any> = useNavigation();
  return (
    <View style={styles.container}>
      {title ? (
        <View>
          <Text
            style={[
              styles.greeting,
              { color: isDarkTheme() ? '#fff' : '#000' },
            ]}
          >
            {t('common:hi')},
          </Text>
          <Text style={styles.title}>{title}</Text>
        </View>
      ) : null}
      {back ? (
        <TouchableOpacity
          style={styles.backContainer}
          onPress={() => navigation.goBack()}
        >
          <BackIcon
            width={widthPercentageToDP(6)}
            height={heightPercentageToDP(3)}
          />
          <Text style={styles.backTitle}>{t('common:back')}</Text>
        </TouchableOpacity>
      ) : null}
      {setting ? (
        <TouchableOpacity onPress={() => navigation.navigate('SettingScreen')}>
          <SettingIcon
            width={widthPercentageToDP(6)}
            height={heightPercentageToDP(3)}
          />
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

export default Header;
