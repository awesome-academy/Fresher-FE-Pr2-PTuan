import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { openNotificationWithIcon } from '../../helper';

import { cartAPI } from '../../Service/';
import { API_PATH } from '../../Service/constants';

import { FAIL, REQUEST, SUCCESS, CART_ACTION } from '../constants';

function* getOrder(action) {
  try {
    const { id } = action.payload;
    const { data } = yield cartAPI.getOrderById(id);
    yield put({
      type: SUCCESS(CART_ACTION.GET_ORDER),
      payload: data,
    });
  } catch (e) {
    yield put({
      type: FAIL(CART_ACTION.GET_CART),
      payload: e.message,
    });
  }
}

function* pushCartToServer(action) {
  try {
    const { userInfo, cart, total, callback } = action.payload;
    const { data } = yield cartAPI.pushCartToServer({
      userId: userInfo.id,
      total,
      status: 'pending',
      cart,
    });
    if (data) {
      yield openNotificationWithIcon({
        type: 'success',
        message: 'Đặt hàng thành công',
      });
      yield put({
        type: SUCCESS(CART_ACTION.GET_CART),
        payload: userInfo.id,
      });
      yield put({
        type: REQUEST(CART_ACTION.CLEAR_CART),
      });
      callback();
    }
  } catch (e) {
    yield openNotificationWithIcon({
      type: 'error',
      message: 'Đặt hàng lỗi!',
    });
    yield put({
      type: FAIL(CART_ACTION.GET_CART),
      payload: e.message,
    });
  }
}

function* cancerOrder(action) {
  try {
    const { status, id, userID } = action.payload;
    const result = yield axios.patch(`${API_PATH}/orders/${id}`, { status });
    if (result.data) {
      yield openNotificationWithIcon({
        type: 'success',
        message: 'Huỷ đơn thành công',
      });
      yield put({
        type: REQUEST(CART_ACTION.GET_ORDER),
        payload: userID,
      });
    }
  } catch (e) {
    yield openNotificationWithIcon({
      type: 'error',
      message: 'lỗi!',
    });
  }
}

export default function* cartSaga() {
  yield takeEvery(REQUEST(CART_ACTION.PUSH_CART), pushCartToServer);
  yield takeEvery(REQUEST(CART_ACTION.GET_ORDER), getOrder);
  yield takeEvery(REQUEST(CART_ACTION.CANCEL_ORDER), cancerOrder);
}
