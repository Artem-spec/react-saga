import {
  call,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from "redux-saga/effects";
import { getDataStarWars } from "../../../../utils/response/getDataStarWars";
import { PathStarWars } from "../../../../utils/path/pathStarwars";
import { IPeople } from "../../interface/people";
import {
  getPeopleFailure,
  getPeopleFetchSaga,
  getPeopleSuccess,
} from "./people.reducer";

export function* workPeople() {
  try {
    const people: IPeople[] = yield call(getDataStarWars, PathStarWars.People);
    yield put(getPeopleSuccess(people));
  } catch (error) {
    yield put(getPeopleFailure());
  }
}

function* watchPeople() {
  yield takeLatest(getPeopleFetchSaga.type, workPeople);
}

function* peopleSaga() {
  yield watchPeople();
}
export default peopleSaga;
