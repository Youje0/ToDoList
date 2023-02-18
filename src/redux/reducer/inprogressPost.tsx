import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface inprogressPost {
  id: number;
  title: string;
  toDoContent: string;
}

interface inprogressPostsState {
  posts: inprogressPost[];
}

const initialState: inprogressPostsState = {
  posts: [],
};

const postsSlice = createSlice({
  name: "inprogressPostPosts",
  initialState,
  reducers: {
    inprogressPost: (state, action: PayloadAction<inprogressPost>) => {
      state.posts.push(action.payload);
    },
  },
});

export const { inprogressPost } = postsSlice.actions;
export default postsSlice.reducer;
