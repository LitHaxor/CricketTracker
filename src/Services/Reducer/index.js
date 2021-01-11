import {combineReducers} from 'redux';

import RunsReducer from './RunsReducer.js';
import BallsReducer from './BallsReducer';
import OverReducer from './OverReducer';
import WicketReducer from './WicketReducer';
const rootReducer = combineReducers({
    RunsReducer,
    BallsReducer,
    OverReducer,
    WicketReducer
})

export default rootReducer;