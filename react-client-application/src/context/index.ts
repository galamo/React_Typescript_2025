import { createContext, Dispatch, SetStateAction } from "react";

export interface IContextState {
  isLocalTime: boolean;
  postsTheme: string;
  dispatch: any;
}

export const initialState: IContextState = {
  isLocalTime: true,
  postsTheme: "white",
  dispatch: () => {},
};

export const SettingsContext = createContext<IContextState>(initialState);
