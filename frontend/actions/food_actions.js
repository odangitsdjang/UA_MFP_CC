export const ADD_FOOD = "ADD_FOOD";
export const REMOVE_FOOD = "REMOVE_FOOD";

export const addFood = (food) => ({
  type: ADD_FOOD,
  food
});

export const removeFood = (food) => ({
  type: REMOVE_FOOD,
  food
});
