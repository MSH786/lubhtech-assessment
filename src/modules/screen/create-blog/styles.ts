import { StyleSheet } from 'react-native';
import { widthPercentageToDP } from '../../../utilities/responsive';

export const styles = StyleSheet.create({
  blogContainer: {
    backgroundColor: '#fff',
    flex: 1,
  },
  blogDarkContainer: {
    backgroundColor: '#000',
    flex: 1,
  },
  blogInnerContainer: {
    flex: 1,
    width: '90%',
    alignSelf: 'center',
  },
});
