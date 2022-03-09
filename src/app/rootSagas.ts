import {all, put} from "redux-saga/effects";
import catSaga from "../components/cats/catSaga";
import peopleSaga from '../components/starwars/directory/People/people.sagas';
import planetsSaga from '../components/starwars/directory/Planets/planets.sagas';

export function* rootSaga() {
    yield all([peopleSaga(), planetsSaga()]);
}