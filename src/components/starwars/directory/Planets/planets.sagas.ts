import { call, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { getDataStarwars } from "../../../../utils/response/getDataStarWars";
import { PathStarWars } from "../../../../utils/path/pathStarwars";
import { IPlanet } from '../../interface/planet';
import { getPlanetsSuccess } from "./planets.reducer";

// https://swapi.dev/api/
function* workPlanets() {
//   
  const planets: IPlanet[] = yield call(
    getDataStarwars,
    PathStarWars.Planets
  );
  yield put(getPlanetsSuccess(planets));
}

function* watchPlanets() {
  yield takeLatest('planets/getPlanetsFetch', workPlanets);
}

function* planetsSaga() {
  yield watchPlanets();
}
export default planetsSaga;
