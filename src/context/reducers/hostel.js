import AxiosAPI from '../../helpers/axiosInterceptor';

const ACTIONS = {
  GET_HOSTLS: 'get-hostels',
};

export const initialState = {
  data: [],
};

export default hostelReducer = (state, {type, payload}) => {
  switch (type) {
    case ACTIONS.GET_HOSTLS:
      return {...state, data: payload};

    default:
      return state;
  }
};

export function useHostelRecuderMethods(dispatch) {
  async function getHostels() {
    try {
      const {data} = await AxiosAPI.get('/v1/hostel');

      dispatch({type: ACTIONS.GET_HOSTLS, payload: data});
    } catch (e) {
      console.log('error', e.message);
    }
  }

  return {
    getHostels,
  };
}
