import axios from 'axios';

const AxiosAPI = axios.create({
  baseURL: 'http://10.0.2.2:3000',
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
