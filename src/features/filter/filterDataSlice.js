// Creating the slice for my filter data

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  experience: 0,
  workplace: [],
  minBasePay: 0,
  search: [],
};

export const filterDataSlice = createSlice({
  name: "filterData",
  initialState,
  reducers: {
    // Reducer function to add a role
    setRole: (state, action) => {
      state.roles = action.payload;
    },

    // Reducer function to add an experience
    setExperience: (state, action) => {
      state.experience = action.payload;
    },
    // Reducer function to add a location
    setWorkplace: (state, action) => {
      state.workplace = action.payload;
    },
    // Reducer function to set min base pay
    setMinBasePay: (state, action) => {
      state.minBasePay = action.payload;
    },
    // Reducer function to set search term
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const {
  setRole,
  setNoOfEmployees,
  setExperience,
  setWorkplace,
  setMinBasePay,
  setSearch,
} = filterDataSlice.actions;

export default filterDataSlice.reducer;
