import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { openNotificationWithIcon } from '../../helper';

import { productAPI } from '../../Service';
import { API_PATH } from '../../Service/constants';

import { FAIL, REQUEST, SUCCESS, PRODUCT_ACTION } from '../constants';

function* getAllProduct() {
  try {
    const { data } = yield productAPI.getAllProduct();
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_ALL_PRODUCT),
      payload: data,
    });
  } catch (e) {
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_ALL_PRODUCT),
      payload: e.message,
    });
  }
}

function* getProductDetail(action) {
  try {
    const { id } = action.payload;
    const { data } = yield productAPI.getProductDetail(id);
    yield put({
      type: SUCCESS(PRODUCT_ACTION.GET_PRODUCT_INFO),
      payload: {
        data: data,
      },
    });
  } catch (errors) {
    console.log(errors);
    yield put({
      type: FAIL(PRODUCT_ACTION.GET_PRODUCT_INFO),
      payload: {
        data: errors.message,
      },
    });
  }
}

function* filterProduct(action) {
  try {
    const { data } = yield axios.get(`${API_PATH}/products`, {
      params: action.payload,
    });

    yield put({
      type: SUCCESS(PRODUCT_ACTION.FILTER_PRODUCT),
      payload: data,
    });
  } catch (errors) {
    yield openNotificationWithIcon({
      type: 'error',
      message: 'Thất bại',
    });
  }
}

export default function* userSaga() {
  yield takeEvery(REQUEST(PRODUCT_ACTION.GET_ALL_PRODUCT), getAllProduct);
  yield takeEvery(REQUEST(PRODUCT_ACTION.GET_PRODUCT_INFO), getProductDetail);
  yield takeEvery(REQUEST(PRODUCT_ACTION.FILTER_PRODUCT), filterProduct);
}
