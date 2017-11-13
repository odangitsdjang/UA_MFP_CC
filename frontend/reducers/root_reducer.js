import { combineReducers } from 'redux';

import UserReducer from './user_reducer';
import DateReducer from './date_reducer';
import FoodsReducer from './food_reducer';


const RootReducer = combineReducers({
  foods: FoodsReducer,
  currentDate: DateReducer,
  currentUser: UserReducer
});

export default RootReducer;