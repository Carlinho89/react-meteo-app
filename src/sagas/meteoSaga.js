import {call, put, takeLatest} from 'redux-saga/effects';
import axios from 'axios';

import {QUERY_WEARHERCAST} from '../actions/meteo';
export const QUERY_WEARHERCAST_FAIL = 'QUERY_WEARHERCAST_FAIL';
export const QUERY_WEARHERCAST_SUCCESS = 'QUERY_WEARHERCAST_SUCCESS';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchMeteo(action) {
    const {latitude, longitude} = action.payload;
    if (latitude && longitude) {
        const request = {
            method: 'get',
            url: `
                https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(${latitude}%2C${longitude})%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys               
            `
        };
        try {
            const response = yield call(axios, request);
            yield put({
                type: QUERY_WEARHERCAST_SUCCESS,
                payload: response.data});
        } catch (e) {
            yield put({
                type: QUERY_WEARHERCAST_FAIL,
                payload: e.message});
        }
    }
    else {
        yield put({
            type: QUERY_WEARHERCAST_FAIL,
            message: 'Error: no latitude or longitude provided!'});
    }
    
}
export function* fetchMeteoWatcher() {
    yield takeLatest(QUERY_WEARHERCAST, fetchMeteo);
}