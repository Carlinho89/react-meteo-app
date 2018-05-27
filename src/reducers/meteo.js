import {handleActions} from 'redux-actions';
import meteoActions from '../actions/meteo';

const defaultState = {
    test: 'this is working!'
};

const reducer = handleActions({
    [meteoActions.testMeteo]: (state, action) => {
        return {
            ...state
        };
    }
}, defaultState);

export default reducer;