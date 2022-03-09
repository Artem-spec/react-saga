import { createSlice } from "@reduxjs/toolkit";
import { IPeople } from "../../interface/people";



const initialState = {
  people: {} as IPeople,
  isLoad: false,
  isError: false,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPeopleFetch: (state) => {
      state.isLoad = true;
    },
    getPeopleSuccess: (state, action) => {
      state.people = action.payload;
      state.isLoad = false;
      state.isError = false;
    },
    getPeopleFailure: (state) => {
      state.isLoad = false;
      state.isError = true;
    },
  },
});
export const { getPeopleFetch, getPeopleSuccess, getPeopleFailure } =
  peopleSlice.actions;
export const peopleReducer = peopleSlice.reducer;
