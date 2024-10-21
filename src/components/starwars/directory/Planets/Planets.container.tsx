import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { getPlanetsFetchSaga } from "./planets.reducer";
import { IPlanets } from "../../interface/planet";
import { PlanetsLayout } from "./Planets.layout";
import { CustomPagination } from "../../common/customPagination/CustomPagination.container";

export const Planets = () => {
  const dispatch = useDispatch();
  const [currentIndexPagination, setCurrentIndexPagination] =
    useState<number>(12);
  const planets = useSelector<RootState, IPlanets>(
    (state) => state.planetsReducer.planets
  );
  useEffect(() => {
    dispatch(getPlanetsFetchSaga());
  }, [dispatch]);

  // useEffect(() => {}, [planets]);

  return (
    <>
      <PlanetsLayout items={planets.results} />
      <CustomPagination
        firstIndex={1}
        lastIndex={20}
        currentIndex={currentIndexPagination}
        setCurrentIndex={setCurrentIndexPagination}
      />
    </>
  );
};
