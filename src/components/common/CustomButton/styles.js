import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    paddingHorizontal: 1,
    marginVertical: 5,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'space-evenly',
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
