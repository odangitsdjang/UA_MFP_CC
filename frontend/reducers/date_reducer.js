import { CHANGE_DATE } from '../actions/date_actions';
const date = new Date();
const defaultDate = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;

const DateReducer = (state = defaultDate, action) => {
  Object.freeze(state);
  switch (action.type) {
    // can add other cases in here when backend is setup
    case CHANGE_DATE:
      return action.date;
    default:
      return state;
  }
};

export default DateReducer;