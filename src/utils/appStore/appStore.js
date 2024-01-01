import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../appStore/userSlice";
import movieReducer from "../appStore/movieSlice";
import gptSlice from "../appStore/gptSlice";
import configSlice from "./configSlice";

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movies: movieReducer,
        gpt: gptSlice,
        config: configSlice
    }
});

export default appStore;
