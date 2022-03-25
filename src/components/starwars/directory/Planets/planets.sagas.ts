import { call, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { getDataStarWars, getItemStarWars } from "../../../../utils/response/getDataStarWars";
import { PathStarWars } from "../../../../utils/path/pathStarwars";
import { IPlanet } from '../../interface/planet';
import { getPlanetsFailure, getPlanetsFetchSaga, getPlanetsSuccess } from "./planets.reducer";
import { IFilm } from '../../interface/films';

function* workPlanets() {
  try {
    const planets: IPlanet[] = yield call(
      getDataStarWars,
      PathStarWars.Planets
    );
    yield put(getPlanetsSuccess(planets));
  } catch (error) {
    yield put(getPlanetsFailure());
  }
}

function* watchPlanets() {
  yield takeLatest(getPlanetsFetchSaga.type, workPlanets);
}

function* planetsSaga() {
  yield watchPlanets();
}
export default planetsSaga;
