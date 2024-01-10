import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '../../../utilities/responsive';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  loginFormContainer: {
    width: '100%',
    alignItems: 'center',
  },
  bottomContainer: { width: '100%', marginVertical: 20, alignItems: 'center' },
  orContainer: {
    width: '100%',
    borderWidth: 0.5,
    borderColor: '#d3d3d3',
  },
  separtaterTitle: {
    color: theme.color.grey.original,
    fontSize: heightPercentageToDP(1.8),
    fontFamily: 'Poppins-Regular',
  },
  imageContainer: {
    width: heightPercentageToDP(15),
    height: heightPercentageToDP(15),
  },
  imageInnerContainer: {
    marginBottom: 40,
    marginTop: heightPercentageToDP(8),
    width: '100%',
    alignItems: 'center',
  },
  googleButtonContainer: {
    width: '100%',
    marginTop: 10,
    alignItems: 'center',
  },
  googleButtonStyle: {
    width: '100%',
    height: heightPercentageToDP(7.5),
    borderRadius: heightPercentageToDP(5),
  },
});
