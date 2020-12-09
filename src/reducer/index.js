import { combineReducers } from "redux";
import { getReducer } from "./getReducer";
import { deleteReducer } from "./deleteReducer";
import { editReducer } from "./editReducer";
import { BookReducer } from "./bookReducer";
import { getStudentReducer } from "./studentReducer";

const appReducer = combineReducers({
  getReducer,
  deleteReducer,
  editReducer,
  BookReducer,
  getStudentReducer
});

export default appReducer;
