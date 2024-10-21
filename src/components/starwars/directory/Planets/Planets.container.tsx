import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { getPlanetsFetch } from "./planets.reducer";
import { IPlanets } from '../../interface/planet';
import { PlanetsLayout } from './Planets.layout';

export const Planets = () => {
  const dispatch = useDispatch();
  const planets = useSelector<RootState, IPlanets>(
    (state) => state.planetsReducer.planets
  );
  useEffect(() => {
    dispatch(getPlanetsFetch());
  }, [dispatch]);
  return <PlanetsLayout items={planets.results}/>;
};
