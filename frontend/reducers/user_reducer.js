// The below should probably be set to null when backend is set up.
const defaultUser = { 
  name: "David Jang",
  username: "davidjang"
};

const UserReducer = (state = defaultUser, action) => {
  Object.freeze(state);
  switch (action.type) {
    // can add other cases in here when backend is setup
    default:
      return state;
  }
};

export default UserReducer;