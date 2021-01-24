//1- create the initial store storage
//2- Store takes a new state, then tell redux to redisplay the change
import { createStore, applyMiddleware, compose } from "redux";
import Reducer from '../4-Redux/Reducers/Reducer'
import thunk from "redux-thunk";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

const store = createStore(Reducer, 
    composeEnhancers(applyMiddleware(thunk)));

export default store;
