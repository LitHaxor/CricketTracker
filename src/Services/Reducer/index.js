import {combineReducers} from 'redux';

import RunsReducer from './RunsReducer.js';
import BallsReducer from './BallsReducer';
import OverReducer from './OverReducer';
import WicketReducer from './WicketReducer';
import LastRunReducer from './LastTracker'
const rootReducer = combineReducers({
    RunsReducer,
    BallsReducer,
    OverReducer,
    WicketReducer,
    LastRunReducer
})

export default rootReducer;