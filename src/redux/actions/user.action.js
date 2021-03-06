import { createAction } from '../../helper';
import { REQUEST, USER_ACTION } from '../constants';

export const login = (payload) =>
  createAction(REQUEST(USER_ACTION.SIGN_IN), payload);

export const register = (payload) =>
  createAction(REQUEST(USER_ACTION.SIGN_UP), payload);

export const logout = () => createAction(REQUEST(USER_ACTION.SIGN_OUT));

export const changePassword = (payload) =>
  createAction(REQUEST(USER_ACTION.CHANGE_PASSWORD), payload);

export const getUserInfo = (payload) =>
  createAction(REQUEST(USER_ACTION.GET_USER_INFO), payload);

export const changeUserInfo = (payload) =>
  createAction(REQUEST(USER_ACTION.CHANGE_USER_INFO), payload);

export const getAllUser = (payload) =>
  createAction(REQUEST(USER_ACTION.GET_ALL_USER), payload);
