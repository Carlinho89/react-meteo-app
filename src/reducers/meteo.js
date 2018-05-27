import {handleActions} from 'redux-actions';
import { QUERY_WEARHERCAST } from '../actions/meteo';
import { QUERY_WEARHERCAST_SUCCESS, QUERY_WEARHERCAST_FAIL} from '../sagas/meteoSaga';
const defaultState = {
    query: {},
    isLoading: false,
    isLoaded: false,
    error: null
};

const reducer = handleActions({
    [QUERY_WEARHERCAST]: (state) => {
        return {
            ...state,
            isLoading: true,
            isLoaded: false,
            error: null
        };
    },
    [QUERY_WEARHERCAST_FAIL]: (state, action) => {
        return {
            ...state,
            isLoading: false,
            isLoaded: false,
            error: action.payload
        };
    },
    [QUERY_WEARHERCAST_SUCCESS]: (state, action) => {
        return {
            ...state,
            isLoading: false,
            isLoaded: true,
            query: action.payload.query,
            error: null
        };
    }
}, defaultState);

export default reducer;