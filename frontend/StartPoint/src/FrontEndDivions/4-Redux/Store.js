//1- create the initial store storage
//2- Store takes a new state, then tell redux to redisplay the change
import { createStore, applyMiddleware, compose } from "redux";
import Reducer from '../4-Redux/Reducers/Reducer'
import thunk from "redux-thunk";
const saveToLocalStorage = () => {
  try {
    const state = store.getState()
    var state_copy = state
    //if last item user uploaded exceeded 4 mb
    var lastElement = state_copy[2][state_copy[2].length-1];
    if(((((JSON.stringify(lastElement).length)*2)/1000)/1000)>4)
    {
      state_copy[2].pop();
      state_copy[2].push(
        { 
          elementType: 'MessageTemplate',
          serverSide: false,
          message: {TextField : "message received"},
        }
      );
      //should rarely appear
      alert("Item is too large, It will be received but won't be shown");
    }
    else{
    //After adding last item user uploaded the store state excedded 4.9 mb 
    //keep deleting old messages to make space
    while(((((JSON.stringify(state_copy).length)*2)/1000)/1000)>4.9)
    {
      state_copy[2].shift();
    }
  }
    const serializedState = JSON.stringify(state_copy)
    //Done to prevent setting the local storage with reducer initial state at page refresh
    //reducer initial state is: state = [{height:"32"},[],[]] 
    if (serializedState !== '[{"height":40},[],[{"elementType":"MessageTemplate","serverSide":true,"message":{"TextField":"مساء الخير يا فندم اخبارك ايه اتشرف بالاسم"}}],{"isSending":false}]') {
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
