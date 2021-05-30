export const ACTIONS = {
  REGISTER_LOADING: 'REGISTER_LOADING',
  REGISTER_SUCCESS: 'REGISTER_SUCCESS',
  REGISTER_FAIL: 'REGISTER_FAIL',
};

const auth = (state, {type, payload}) => {
  switch (type) {
    case ACTIONS.REGISTER_LOADING:
      return {...state, loading: true};

    case ACTIONS.REGISTER_SUCCESS:
      return {...state, loading: false, data: payload};

    case ACTIONS.REGISTER_FAIL:
      return {...state, loading: false, error: payload};

    default:
      return state;
  }
};

export default auth;
