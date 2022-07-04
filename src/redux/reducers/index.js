import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import productReducer from './product.reducer';
import cartReducer from './cart.reducer';

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  cartReducer,
});

export default rootReducer;
