import { configureStore } from "@reduxjs/toolkit";
import settingsSlice from "./settingsSlice";

export const store = configureStore({
  reducer: {
    // posts: postsReducer,
    settings: settingsSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
