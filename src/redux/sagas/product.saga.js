import { put, takeEvery } from 'redux-saga/effects';

import { productAPI } from '../../Service';

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

export default function* userSaga() {
  yield takeEvery(REQUEST(PRODUCT_ACTION.GET_ALL_PRODUCT), getAllProduct);
  yield takeEvery(REQUEST(PRODUCT_ACTION.GET_PRODUCT_INFO), getProductDetail);
}
