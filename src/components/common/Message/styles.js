import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 1,
    paddingVertical: 13,
    marginVertical: 5,
    borderRadius: 4,
  },
  textInput: {
    flex: 1,
    color: colors.grey,
    width: '100%',
  },
  loaderSection: {
    flexDirection: 'row',
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
  },
});
