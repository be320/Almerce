//1- create the initial store storage
//2- Store takes a new state, then tell redux to redisplay the change
import { createStore, applyMiddleware, compose } from "redux";
import combineReducer from '../4-Redux/Reducers/CombinerReducers'
import thunk from "redux-thunk";

const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; 

const store = createStore(combineReducer, 
    composeEnhancers(applyMiddleware(thunk)));

export default store;