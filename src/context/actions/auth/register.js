import axiosInstance from '../../../helpers/axiosInterceptor';
import {
  REGISTER_FAIL,
  REGISTER_LOADING,
  REGISTER_SUCCESS,
} from '../../../constants/actionTypes';

export default ({
  email,
  password,
  mobileNumber,
  firstName,
  lastName,
}) => dispatch => {
  dispatch({
    type: REGISTER_LOADING,
  });
  axiosInstance
    .post('/auth/signup/', {
      email,
      password,
      mobileNumber,
      firstName,
      lastName,
    })
    .then(res => {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: REGISTER_FAIL,
        payload: err.responce
          ? err.responce.data
          : {error: 'Something went wrong. Try again'},
      });
    });
};
