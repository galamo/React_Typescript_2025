import { createContext, Dispatch, SetStateAction } from "react";

export interface IContextState {
  isLocalTime: boolean;
  postsTheme: string;
  isPrettyNumbers: boolean;
  dispatch: any;
}

export const initialState: IContextState = {
  isLocalTime: true,
  isPrettyNumbers: false,
  postsTheme: "white",
  dispatch: () => {},
};

export const SettingsContext = createContext<IContextState>(initialState);
