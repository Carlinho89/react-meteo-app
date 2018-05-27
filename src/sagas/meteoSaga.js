import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {QUERY_WEARHERCAST} from '../actions/meteo';
export const QUERY_WEARHERCAST_FAIL = 'QUERY_WEARHERCAST_FAIL';
export const QUERY_WEARHERCAST_SUCCESS = 'QUERY_WEARHERCAST_SUCCESS';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchMeteo(action) {
    debugger;
    const {latitude, longitude} = action;
    if (latitude && longitude) {
        const request = {
            method: 'get',
            url: `api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}`
        };
        try {
            const response = yield call(axios, request);
            console.log('success!');
            debugger;
            yield put({
                type: QUERY_WEARHERCAST_SUCCESS,
                payload: response.data});
        } catch (e) {
            yield put({
                type: QUERY_WEARHERCAST_FAIL,
                message: e.message});
        }
    }
    else {
        yield put({
            type: QUERY_WEARHERCAST_FAIL,
            message: 'Error: no latitude or longitude provided!'});
    }
    
}
export function* fetchMeteoWatcher() {
    yield takeLatest(TEST_METEO_ACTION, fetchMeteo);
}