import { createStore, combineReducers } from 'redux';
import MyReducer  from '../reducers/MyReducer';

// combine reducers if multiple 
const rootReducer = combineReducers({MyReducer});

// createStore
const store = createStore(rootReducer);

export default store;