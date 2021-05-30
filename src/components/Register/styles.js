import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 100,
    width: 100,
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 30,
  },
  sTitle: {
    fontSize: 21,
    textAlign: 'center',
    paddingVertical: 20,
  },
  form: {
    paddingTop: 1,
  },
  loginSection: {
    flexDirection: 'row',
  },
  linkBTN: {
    paddingLeft: 14,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
