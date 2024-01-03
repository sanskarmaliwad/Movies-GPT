import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    language: "en",
    showLoader: false
  },
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setShowLoader: (state) =>{
      state.showLoader = !state.showLoader;
    }
  },
});

export const { setLanguage, setShowLoader } = configSlice.actions;
export default configSlice.reducer;
