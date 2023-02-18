import { combineReducers, configureStore } from "@reduxjs/toolkit";
import addPost from "../reducer/addPost";
import inprogressPost from "../reducer/inprogressPost";

const rootReducer = combineReducers({
  post: addPost,
  inprogressPost: inprogressPost,
});

export default configureStore({
  reducer: {
    post: addPost,
    inprogressPost: inprogressPost,
  },
});

export type RootState = ReturnType<typeof rootReducer>;
