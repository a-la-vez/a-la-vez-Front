import { combineReducers } from "redux";
import posts from "./posts";
import apply from "./apply";
import comments from "./comments";

const rootReducer = combineReducers({
  posts,
  apply,
  comments,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
