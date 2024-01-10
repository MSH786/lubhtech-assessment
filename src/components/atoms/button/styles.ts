import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '../../../utilities/responsive';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.color.success.original,
    borderRadius: heightPercentageToDP(0.7),
    paddingVertical: heightPercentageToDP(2),
  },
  buttonTitle: {
    color: theme.color.white.original,
    fontSize: 15,
  },
});
