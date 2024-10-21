import { createSlice } from "@reduxjs/toolkit";
import { IPlanet, IPlanets } from '../../interface/planet';

const initialState = {
  planets: {} as IPlanets,
  isLoad: false,
  isError: false,
};

export const planetsSlice = createSlice({
  name: "planets",
  initialState,
  reducers: {
    getPlanetsFetch: (state) => {
      state.isLoad = true;
    },
    getPlanetsSuccess: (state, action) => {
      state.planets = action.payload;
      state.isLoad = false;
      state.isError = false;
    },
    getPlanetsFailure: (state) => {
      state.isLoad = false;
      state.isError = true;
    },
  },
});
export const { getPlanetsFetch, getPlanetsSuccess, getPlanetsFailure } = planetsSlice.actions;
export const planetsReducer = planetsSlice.reducer;