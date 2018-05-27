import {createAction} from 'redux-actions';

// Action types
export const TEST_METEO_ACTION = 'TEST_METEO_ACTION';

const testMeteo = createAction(TEST_METEO_ACTION);

export default {
    testMeteo
};