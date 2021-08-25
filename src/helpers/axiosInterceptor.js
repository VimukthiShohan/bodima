import axios from 'axios';

let headers = {};

const AxiosAPI = axios.create({
  baseURL: 'http://127.0.0.1:3000',
});

AxiosAPI.interceptors.request.use(
  config => {
    console.log('config', config.baseURL);
    // const token = await AsyncStorage.getItem('token');
    // if (token) {
    // config.headers.Authorization = 'token';
    // Need to check token
    // }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default AxiosAPI;
