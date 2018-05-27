import { combineReducers } from 'redux';
import meteo from './reducers/meteo';


export default combineReducers({
    meteo: meteo
});
