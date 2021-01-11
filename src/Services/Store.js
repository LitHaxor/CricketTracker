import { createStore } from "redux";

import rootReducer from './Reducer/index';

const initialState ={}

const store = createStore (rootReducer, initialState);

export default store;