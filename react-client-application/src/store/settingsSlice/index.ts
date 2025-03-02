import { createSlice } from "@reduxjs/toolkit";
export interface SettingsState {
  reportsAvailable: boolean;
  isPostsAvailable: boolean;
  userName: string;
}

const initialState: SettingsState = {
  reportsAvailable: true,
  isPostsAvailable: false,
  userName: "",
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setReportPL: (state) => {
      state.reportsAvailable = !state.reportsAvailable;
    },
    setPostsPL: (state) => {
      state.isPostsAvailable = !state.isPostsAvailable;
    },
    setUserName: (state, action) => {
      if (typeof action.payload === "string") {
        state.userName = action.payload.slice(0, 3);
        console.log(action.payload.slice(0, 3));
      }
    },
  },
});

export const { setReportPL, setPostsPL, setUserName } = settingsSlice.actions;

export default settingsSlice.reducer;
