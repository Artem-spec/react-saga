import { createSlice } from "@reduxjs/toolkit";
import { IFilms } from "../interface/films";


const initialState = {
  films: {} as IFilms,
  isLoad: false,
  isError: false,
};

export const filmsSlice = createSlice({
  name: "films",
  initialState,
  reducers: {
    getFilmsFetchSaga: (state) => {
      state.isLoad = true;
    },
    getFilmsSuccess: (state, action) => {
      state.films = action.payload;
      state.isLoad = false;
      state.isError = false;
    },
    getFilmsFailure: (state) => {
      state.isLoad = false;
      state.isError = true;
    },
  },
});
export const { getFilmsFetchSaga, getFilmsSuccess, getFilmsFailure } = filmsSlice.actions;
export const filmsReducer = filmsSlice.reducer;