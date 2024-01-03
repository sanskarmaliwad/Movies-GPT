import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    moviesSuggestedByGpt: null,
    moviesFetchedFromTmdb: null,
  },
  reducers: {
    toggleGPTSearch: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addMoviesSuggestedByGpt: (state, action) => {
      state.moviesSuggestedByGpt = action.payload;
    },
    addMoviesFetchedFromTmtb: (state, action) => {
      state.moviesFetchedFromTmdb = action.payload;
    },
  },
});

export const { toggleGPTSearch, addMoviesFetchedFromTmtb, addMoviesSuggestedByGpt } = gptSlice.actions;
export default gptSlice.reducer;
