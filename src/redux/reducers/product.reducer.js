import { getLocal, setLocal } from '../../helper';
import { FAIL, REQUEST, SUCCESS, PRODUCT_ACTION } from '../constants';

const initialState = {
  products: [],
  productDetails: {},
  loading: false,
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case REQUEST(PRODUCT_ACTION.GET_ALL_PRODUCT):
      return {
        ...state,
        loading: true,
      };
    case SUCCESS(PRODUCT_ACTION.GET_ALL_PRODUCT):
      return {
        ...state,
        products: payload,
        loading: false,
      };
    case FAIL(PRODUCT_ACTION.GET_ALL_PRODUCT):
      return {
        ...state,
        userInfo: {},
        loading: false,
      };
    // Get detail
    case REQUEST(PRODUCT_ACTION.GET_PRODUCT_INFO):
      return {
        ...state,
        loading: true,
      };
    case SUCCESS(PRODUCT_ACTION.GET_PRODUCT_INFO):
      return {
        ...state,
        productDetails: payload.data,
        loading: false,
      };
    case FAIL(PRODUCT_ACTION.GET_PRODUCT_INFO):
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
