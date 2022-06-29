import { put, takeEvery } from 'redux-saga/effects';

import { openNotificationWithIcon } from '../../helper';

import { FAIL, REQUEST, SUCCESS, USER_ACTION } from '../constants';
import { authAPI } from '../../Service';

function* Login(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield authAPI.login(data);
    yield put({
      type: SUCCESS(USER_ACTION.SIGN_IN),
      payload: response,
    });
    yield openNotificationWithIcon({
      type: 'success',
      message: 'Đăng nhập thành công!',
    });

    if (response.data.user.role === 'admin') {
      callback('/admin');
    } else {
      callback('/');
    }
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.SIGN_IN),
      payload: e.message,
    });
    yield openNotificationWithIcon({
      type: 'error',
      message: 'Login fail!',
      description: 'Incorrect account or password!',
    });
  }
}

function* Register(action) {
  try {
    const { data, callback } = action.payload;
    const response = yield authAPI.register(data);
    yield put({
      type: SUCCESS(USER_ACTION.SIGN_UP),
      payload: response,
    });
    yield openNotificationWithIcon({
      type: 'success',
      message: 'Đăng ký tài khoản thành công!',
    });
    callback();
  } catch (e) {
    console.log(e);
    yield put({
      type: FAIL(USER_ACTION.SIGN_UP),
      payload: e.message,
    });
    yield openNotificationWithIcon({
      type: 'error',
      message: 'Đăng ký thất bại',
      description: 'Email đã được sử dụng, vui lòng chọn 1 email khác!',
    });
  }
}

function* getUserInfoSaga(action) {
  try {
    const { data } = yield authAPI.getInfo(action.payload);
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_INFO),
      payload: {
        data,
      },
    });
  } catch (errors) {
    console.log(errors);
  }
}

export default function* userSaga() {
  yield takeEvery(REQUEST(USER_ACTION.SIGN_IN), Login);
  yield takeEvery(REQUEST(USER_ACTION.SIGN_UP), Register);
}
