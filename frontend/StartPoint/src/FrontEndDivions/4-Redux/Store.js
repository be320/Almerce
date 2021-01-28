//1- create the initial store storage
//2- Store takes a new state, then tell redux to redisplay the change
import { createStore, applyMiddleware, compose } from "redux";
import Reducer from '../4-Redux/Reducers/Reducer'
import thunk from "redux-thunk";
const saveToLocalStorage = () => {
  try {
    const state = store.getState()
    const serializedState = JSON.stringify(state)
    //Done to prevent setting the local storage with reducer initial state at page refresh
    //reducer initial state is: state = [{height:"32"},[],[]] 
    if (serializedState !== '[{"height":32},[],[]]') {
      localStorage.setItem('storedState', serializedState)
    }
    else 
    {
      localStorage.setItem('index', -1)
    }
  }
  catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('storedState')
    if (serializedState === null) {
      return undefined
    }
    else {
      return JSON.parse(serializedState)
    }
  }
  catch (e) {
    console.log(e)
    return undefined
  }
}

const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })) || compose;

const persistedState = loadFromLocalStorage();
const store = createStore(Reducer, persistedState, composeEnhancers(applyMiddleware(thunk)));
store.subscribe(saveToLocalStorage);
export default store;
