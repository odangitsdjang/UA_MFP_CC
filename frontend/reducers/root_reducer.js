import { combineReducers } from 'redux';

import errors from './errors_reducer';
// import loading from './loading_reducer';
import UserReducer from './user_reducer';
// const UIReducer = combineReducers({
//   loading
// });

const RootReducer = combineReducers({
  // entities: EntitiesReducer
  errors,
  // ui: UIReducer
  user: UserReducer
});

export default RootReducer;