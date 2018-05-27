import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {TEST_METEO_ACTION} from '../actions/meteo';
const TEST_METEO_ACTION_FAIL = 'TEST_METEO_ACTION_FAIL';
const TEST_METEO_ACTION_SUCCESS = 'TEST_METEO_ACTION_SUCCESS';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchMeteo() {
    const request = {
        method: 'get',
        url: 'TO-DO'
    };
    try {
        //const response = yield call(axios, request);
        console.log('success!');
        yield put({
            type: TEST_METEO_ACTION_SUCCESS,
            payload: response.data});
    } catch (e) {
        yield put({
            type: TEST_METEO_ACTION_FAIL,
            message: e.message});
    }
}
export function* fetchMeteoWatcher() {
    yield takeLatest(TEST_METEO_ACTION, fetchMeteo);
}