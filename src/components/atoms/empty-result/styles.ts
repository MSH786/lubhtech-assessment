import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from '../../../utilities/responsive';
import { theme } from '../../../config/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: heightPercentageToDP(4),
    color: theme.color.black.original,
  },
  subTitle: {
    fontSize: heightPercentageToDP(3),
    textAlign: 'center',
    color: theme.color.black.original,
  },
  createBlogLink: {
    fontSize: heightPercentageToDP(2),
    textAlign: 'center',
    color: theme.color.success.original,
    marginTop: heightPercentageToDP(1),
  },
});
