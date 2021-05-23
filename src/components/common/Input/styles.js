import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    height: 42,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 1,
    marginTop: 5,
  },
  textInput: {
    flex: 1,
    color: 'black',
    width: '100%',
  },
  inputContainer: {
    paddingVertical: 12,
  },
  error: {
    color: colors.danger,
    paddingTop: 4,
  },
});
