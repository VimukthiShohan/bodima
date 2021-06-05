import AxiosAPI from '../../helpers/axiosInterceptor';
import {useNavigation} from '@react-navigation/native';
import {HOME_NAVIGATOR} from '../../constants/routeNames';
import {ACTIONSLOGIN} from './login';

export const ACTIONS = {
  REGISTER_LOADING: 'REGISTER_LOADING',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
};

export const initialState = {
  loading: false,
  data: {},
  error: '',
};

export const hostelCreateReducer = (state, {type, payload}) => {
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

export function useHostelCreateReducerMethods(dispatch) {
  const navigation = useNavigation();

  async function createHostel(payload) {
    try {
      const data = await AxiosAPI.post('/v1/hostel/create', payload);
      console.log('data', data);
      if (data.status === 201) {
        navigation.navigate(HOME_NAVIGATOR);
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
  return {
    createHostel,
  };
}
