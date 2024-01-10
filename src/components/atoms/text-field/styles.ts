import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from '../../../utilities/responsive';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  inputHandler: { marginBottom: heightPercentageToDP(3), width: '100%' },
  inputContainer: {
    // width: '100%',
    // borderRadius: heightPercentageToDP(2),
    // paddingHorizontal: heightPercentageToDP(1.7),
    // paddingVertical: heightPercentageToDP(2),
    // marginBottom: 5,
    // borderWidth: 1.5,
    // borderColor: '#e2efff',
    marginTop: heightPercentageToDP(0.6),
    width: '100%',
    borderRadius: heightPercentageToDP(1),
    // paddingHorizontal: heightPercentageToDP(1.7),
    height: heightPercentageToDP(7.5),
    justifyContent: 'center',
    marginBottom: 5,
    borderWidth: 1.5,
    borderColor: '#e2efff',
    // borderColor: '#e2efff',
  },
  inputColor: {
    color: '#708090',
    fontFamily: 'Poppins-Regular',
    width: '100%',
    fontSize: heightPercentageToDP(1.8),
    top: heightPercentageToDP(0.1),
    paddingLeft: widthPercentageToDP(2),
    height: heightPercentageToDP(7),
  },
  selector: {
    color: '#708090',
    paddingVertical: heightPercentageToDP(2),
    fontSize: heightPercentageToDP(1.8),
    paddingLeft: widthPercentageToDP(2),
    top: heightPercentageToDP(0.1),
    fontFamily: 'Poppins-Regular',
  },
  inputDarkColor: {
    color: theme.color.white.original,
    fontFamily: 'Poppins-Regular',
    fontSize: heightPercentageToDP(1.6),
    top: heightPercentageToDP(0.5),
    width: '100%',
    borderWidth: 1,
  },
  error: {
    fontSize: heightPercentageToDP(1.4),
    color: 'red',
    marginLeft: widthPercentageToDP(1.5),
  },
  labelView: {
    width: '100%',
  },
  lableTitle: {
    fontSize: heightPercentageToDP(1.8),
    color: '#2E3E5C',
    fontFamily: 'Poppins-Medium',
    opacity: 0.6,
  },
});
