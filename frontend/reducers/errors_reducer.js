// The below should probably be set to null when backend is set up.
let defaultErrors = {};

const ErrorReducer = (state = defaultErrors, action) => {
  Object.freeze(state);
  switch (action.type) {
    // can add other cases in here when backend is setup
    default:
      return state;
  }
};

export default ErrorReducer;