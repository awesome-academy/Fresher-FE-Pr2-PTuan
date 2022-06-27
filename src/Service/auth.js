import axios from 'axios';
import { API_PATH } from './constants';

export const authAPI = {
  login: (data) => axios.post(`${API_PATH}/login`, data),
  register: (data) => axios.post(`${API_PATH}/register`, data),
  getInfo: (data) => axios.get(`${API_PATH}/users/${data.id}`),
};
