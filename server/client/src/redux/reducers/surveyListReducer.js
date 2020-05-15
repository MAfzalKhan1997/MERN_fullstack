import { FETCH_SURVEYS } from "../actions/types";

const reducer = (state = {}, action) => {
  // console.log("authReducer", action);
  switch (action.type) {
    case FETCH_SURVEYS: {
      return { ...state, surveys: action.surveys };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
