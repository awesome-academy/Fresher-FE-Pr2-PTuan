import { combineReducers } from 'redux';

import userReducer from './user.reducer';
import productReducer from './product.reducer';

const rootReducer = combineReducers({
  userReducer,
  productReducer,
});

export default rootReducer;
