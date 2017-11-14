import { ADD_FOOD, REMOVE_FOOD } from '../actions/food_actions';
// The below should probably be set to null when backend is set up.
const defaultFoods = {};

const FoodsReducer = (state = defaultFoods, action) => {
  Object.freeze(state);
  switch (action.type) {
    // can add other cases in here when backend is setup
    case ADD_FOOD: 
      const newFoods = Object.assign({}, state); 
      // if there is nothing under that date add it
      if (!newFoods[action.food.date]) {
        newFoods[action.food.date] = [action.food];
      } else {
        // else check if there is a breakfast/lunch/dinner for that username (only one user in this example exercise)
        newFoods[action.food.date].forEach( (food, i) => {
          if ((food.meal === action.food.meal) && (food.username === action.food.username) && 
            ((food.meal === "breakfast") || (food.meal === "lunch") || (food.meal === "dinner"))
            ) {
            // remove that element
            newFoods[action.food.date].splice(i, 1);
          }
        });
        newFoods[action.food.date].push(action.food);
      }
      return newFoods;
    case REMOVE_FOOD: 
      const foods = Object.assign({}, state); 
      foods[action.food.date].forEach((food, i) =>  {
        // delete 
        if (food == action.food) {
          foods[action.food.date].splice(i, 1);
        }
      });
      return foods;
    default:
      return state;
  }
};

export default FoodsReducer;