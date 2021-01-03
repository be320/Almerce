//1- create the initial store storage
//2- Store takes a new state, then tell redux to redisplay the change
import {createStore} from 'redux';
import combineReducer from '../4-Redux/Reducers/CombinerReducers'

const store = createStore(combineReducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;