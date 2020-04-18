import { FETCH_USER } from "../actions/types";

const reducer = (state = { user: null }, action) => {
  console.log("authReducer", action);
  switch (action.type) {
    case FETCH_USER: {
      return { ...state, user: action.user || false };
    }
    case "REMOVE_USER": {
      return { ...state, user: null };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
