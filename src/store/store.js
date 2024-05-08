// Setting up the Redux Store

import { configureStore } from "@reduxjs/toolkit";
import filterDataReducer from "../features/filter/filterDataSlice";

export const store = configureStore({
  reducer: filterDataReducer,
});
