import axios from 'axios';
import { API_PATH } from './constants';

export const cartAPI = {
  getOrderById: (id) => axios.get(`${API_PATH}/orders?userID=${id}`),
  pushCartToServer: (payload) => axios.post(`${API_PATH}/orders`, payload),
};
