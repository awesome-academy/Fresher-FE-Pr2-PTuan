import { getLocal, removeLocal, setLocal } from '../../helper';
import { FAIL, REQUEST, SUCCESS, USER_ACTION } from '../constants';

const initialState = {
  token: getLocal('token') || '',
  userInfo: {},
  loading: false,
  fullName: '',
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST(USER_ACTION.SIGN_IN):
      return {
        ...state,
        loading: true,
      };
    case SUCCESS(USER_ACTION.SIGN_IN):
      setLocal({ key: 'token', value: payload.data.accessToken });
      setLocal({ key: 'user', value: { id: payload.data.user.id } });
      return {
        ...state,

        token: payload.data.accessToken,
        userInfo: payload.data.user,
        loading: false,
      };
    case FAIL(USER_ACTION.SIGN_IN):
      return {
        ...state,
        userInfo: {},
        loading: false,
      };
    // sign up
    case REQUEST(USER_ACTION.SIGN_UP):
      return {
        ...state,
        loading: true,
      };
    case SUCCESS(USER_ACTION.SIGN_UP):
      return {
        ...state,
        userInfo: {
          data: payload.data,
        },
        loading: false,
      };
    case FAIL(USER_ACTION.SIGN_UP):
      return {
        ...state,
        userInfo: {},
        loading: false,
      };
    default:
      return state;
  }
}

export { initialState };
export default reducer;
