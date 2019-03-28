import React, { createContext, useContext, useReducer } from "react";

import { reducers } from "./reducers";

export const StateContext = createContext();
export const StateProvider = ({ reducers, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducers, initialState)}>
    {children}
  </StateContext.Provider>
);
export const useStateValue = () => useContext(StateContext);
