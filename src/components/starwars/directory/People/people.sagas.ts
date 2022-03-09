import { call, fork, put, take, takeEvery, takeLatest } from "redux-saga/effects";
import { getDataStarwars } from "../../../../utils/response/getDataStarWars";
import { PathStarWars } from "../../../../utils/path/pathStarwars";
import { IPeople } from "../../interface/people";
import { AxiosResponse } from "axios";
import { getPeopleFetch, getPeopleSuccess } from "./people.reducer";

// https://swapi.dev/api/
function* workPeople() {
//   
  const people: IPeople[] = yield call(
    getDataStarwars,
    PathStarWars.People
  );
  yield put(getPeopleSuccess(people));
}

function* watchPeople() {
  yield takeLatest('people/getPeopleFetch', workPeople);
}

function* peopleSaga() {
  yield watchPeople();
}
export default peopleSaga;
