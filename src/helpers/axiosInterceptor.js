import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AxiosAPI = axios.create({
  baseURL: 'http://localhost:3000',
});

AxiosAPI.interceptors.request.use(
  async config => {
    // console.log('config', config.baseURL);
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = token;
      // Need to check token
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

export default AxiosAPI;
