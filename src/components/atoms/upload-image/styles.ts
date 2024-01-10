import { StyleSheet } from 'react-native';

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../utilities/responsive';

export const styles = StyleSheet.create({
  uploadImageContainer: {
    paddingVertical: heightPercentageToDP(2),
    marginBottom: heightPercentageToDP(3.1),
    borderRadius: heightPercentageToDP(1.5),
    borderWidth: 1.5,
    borderColor: '#e2efff',
  },
  innerContainer: {
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'row',
  },
  buttonTitle: {
    paddingTop: heightPercentageToDP(1.8),
    paddingHorizontal: widthPercentageToDP(2),
    fontFamily: 'Poppins-Regular',
    fontSize: heightPercentageToDP(1.8),
  },
});
