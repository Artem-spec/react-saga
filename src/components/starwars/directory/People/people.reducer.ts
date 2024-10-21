import { createSlice } from "@reduxjs/toolkit";
import { IPeople } from "../../interface/people";

export const initialState = {
  people: {} as IPeople,
  isLoad: false,
  isError: false,
};

export const peopleSlice = createSlice({
  name: "people",
  initialState,
  reducers: {
    getPeopleFetchSaga: (state) => {
      state.isLoad = true;
      state.isError = false;
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
export const { getPeopleFetchSaga, getPeopleSuccess, getPeopleFailure } =
  peopleSlice.actions;
export const peopleReducer = peopleSlice.reducer;
