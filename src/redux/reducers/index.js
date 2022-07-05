import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import productReducer from './product.reducer';
import cartReducer from './cart.reducer';
import locationReducer from './location.reducer';

const rootReducer = combineReducers({
  userReducer,
  productReducer,
  cartReducer,
  locationReducer,
});

export default rootReducer;
