import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  logoImage: {
    height: 150,
    width: 150,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 30,
  },
  sTitle: {
    fontSize: 21,
    textAlign: 'center',
    paddingVertical: 20,
  },
  form: {
    paddingTop: 20,
  },
  registerSection: {
    flexDirection: 'row',
  },
  linkBTN: {
    paddingLeft: 14,
    color: colors.primary,
    textDecorationLine: 'underline',
  },
});
