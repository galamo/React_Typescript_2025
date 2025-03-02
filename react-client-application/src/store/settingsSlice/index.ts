import { createSlice } from "@reduxjs/toolkit";
export interface SettingsState {
  reportsAvailable: boolean;
}

const initialState: SettingsState = { reportsAvailable: true };

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setReportPL: (state) => {
      state.reportsAvailable = !state.reportsAvailable;
    },
  },
});

export const { setReportPL } = settingsSlice.actions;

export default settingsSlice.reducer;
