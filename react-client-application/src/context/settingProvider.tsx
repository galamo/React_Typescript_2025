import { useReducer } from "react";
import { IContextState, initialState, SettingsContext } from ".";

type Props = {
  children: React.ReactElement;
};
export const ACTIONS = {
  SET_IS_LOCAL_TIME: "SET_IS_LOCAL_TIME",
  SET_POSTS_THEME: "SET_POSTS_THEME",
};
function settingsReducer<T>(
  state: IContextState,
  action: { type: string; payload?: T }
) {
  console.log(action, state);
  switch (action.type) {
    case ACTIONS.SET_IS_LOCAL_TIME: {
      return { ...state, isLocalTime: !state.isLocalTime };
    }

    case ACTIONS.SET_POSTS_THEME: {
      return { ...state, postsTheme: action.payload };
    }
    default: {
      return state;
    }
  }
}

export default function SettingsProvider({ children }: Props) {
  const [state, dispatch] = useReducer(settingsReducer, initialState);

  return (
    <SettingsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </SettingsContext.Provider>
  );
}
// reducer
