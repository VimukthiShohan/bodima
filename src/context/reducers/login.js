import AxiosAPI from '../../helpers/axiosInterceptor';

export const ACTIONSLOGIN = {
  LOGIN_LOADING: 'LOGIN_LOADING',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAIL: 'LOGIN_FAIL',
};

export const loginInitialState = {
  loading: false,
  error: '',
  logged: false,
};

const authLoginReducer = (state, {type, payload}) => {
  switch (type) {
    case ACTIONSLOGIN.LOGIN_LOADING:
      return {...state, loading: true};

    case ACTIONSLOGIN.LOGIN_SUCCESS:
      return {...state, loading: false, logged: true};

    case ACTIONSLOGIN.LOGIN_FAIL:
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};

export function useLoginReducerMethods(dispatch) {
  async function login(payload) {
    try {
      const {data} = await AxiosAPI.post('/auth/login', payload).then(res => {
        dispatch({
          type: ACTIONSLOGIN.LOGIN_SUCCESS,
          payload: res.data,
        });
      });
      if (data.status === 200) {
        return {logged: true};
      } else {
        return {logged: false};
      }
    } catch (error) {
      return false;
    }
  }
  return {
    login,
  };
}

export default authLoginReducer;
