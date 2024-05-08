// Creating the slice for my filter data

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  roles: [],
  noOfEmployees: [],
  experience: [],
  workplace: [],
  minBasePay: "",
  search: "",
};

export const filterDataSlice = createSlice({
  name: "filterData",
  initialState,
  reducers: {
    // Reducer function to add a role
    setRole: (state, action) => {
      state.roles = action.payload;
      console.log(state.roles);
    },
    // Reducer function to add a number of employees
    setNoOfEmployees: (state, action) => {
      state.noOfEmployees = action.payload;
      console.log(state.noOfEmployees);
    },
    // Reducer function to add an experience
    setExperience: (state, action) => {
      state.experience = action.payload;
      console.log(state.experience);
    },
    // Reducer function to add a location
    setWorkplace: (state, action) => {
      state.workplace = action.payload;
      console.log(state.workplace);
    },
    // Reducer function to set min base pay
    setMinBasePay: (state, action) => {
      state.minBasePay = action.payload;
      console.log(state.minBasePay);
    },
    // Reducer function to set search term
    setSearch: (state, action) => {
      state.search = action.payload;
      console.log(state.search);
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
