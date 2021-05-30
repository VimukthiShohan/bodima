import AxiosAPI from '../../helpers/axiosInterceptor';
import {useNavigation} from '@react-navigation/native';
import {LOGIN} from '../../constants/routeNames';
import {ACTIONSLOGIN} from './login';

export const ACTIONS = {
  REGISTER_LOADING: 'REGISTER_LOADING',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
};

const auth = (state, {type, payload}) => {
  switch (type) {
    case ACTIONSLOGIN.LOGIN_LOADING:
    case ACTIONS.REGISTER_LOADING:
      return {...state, loading: true};

    case ACTIONS.REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};

    case ACTIONSLOGIN.LOGIN_SUCCESS:
      return {...state, loading: false, data: payload, logged: true};

    case ACTIONS.REGISTER_FAIL:
    case ACTIONSLOGIN.LOGIN_FAIL:
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};

export function useAuthReducerMethods(dispatch) {
  const navigation = useNavigation();

  async function register(payload) {
    try {
      const {data} = await AxiosAPI.post('/auth/signup', payload);
      if (data.status === 200) {
        navigation.navigate(LOGIN);
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  return {
    register,
  };
}

export default auth;
