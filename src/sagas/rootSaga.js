import {
    all,
    fork,
} from "redux-saga/effects";
import {fetchMeteoWatcher} from "./meteoSaga";

function* rootSaga() {
    yield all([
       fork(fetchMeteoWatcher)
    ]);
}

export default rootSaga;