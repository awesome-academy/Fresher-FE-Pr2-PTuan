import { createAction } from '../../helper';
import { REQUEST, PRODUCT_ACTION } from '../constants';

export const getAllProduct = (payload) =>
  createAction(REQUEST(PRODUCT_ACTION.GET_ALL_PRODUCT), payload);

export const getProductDetail = (payload) =>
  createAction(REQUEST(PRODUCT_ACTION.GET_PRODUCT_INFO), payload);
