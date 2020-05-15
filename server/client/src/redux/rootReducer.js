import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./reducers/authReducer";
import surveyListReducer from "./reducers/surveyListReducer";

export default combineReducers({
  authReducer,
  form: formReducer,
  surveyListReducer,
});
