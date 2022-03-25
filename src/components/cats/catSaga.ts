import {call, put, takeEvery, takeLatest} from "redux-saga/effects"
import {getCatsSuccess} from './catState'


function* workGetCatsFetch(){
    const cats: Promise<any> = yield call(()=> fetch('https://api.thecatapi.com/v1/breeds'))  
    yield put(getCatsSuccess(cats))
}

function* catSaga(){
    yield takeEvery('cats/getCatFetch', workGetCatsFetch)
}
export default catSaga