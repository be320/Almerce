//1- create the initial store storage
//2- Store takes a new state, then tell redux to redisplay the change
import {createStore} from 'redux';
import combineReducer from './FrontEndDivions/4-Redux/Reducers/CombinerReducers'

let store = createStore(combineReducer);

export default store;