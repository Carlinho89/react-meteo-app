import {createAction} from 'redux-actions';

// Action types
export const QUERY_WEARHERCAST = 'QUERY_WEARHERCAST';

const queryWeathercast = createAction(QUERY_WEARHERCAST, (lat, lon) => {
    return {
        latitude: lat,
        longitude: lon
    };
})

export default {
    queryWeathercast
};