//1- create the initial store storage
//2- Store takes a new state, then tell redux to redisplay the change
import { createStore, applyMiddleware, compose } from "redux";
import Reducer from '../4-Redux/Reducers/Reducer'
import thunk from "redux-thunk";
const saveToLocalStorage = () => {
  try {
    const state = store.getState()
    var state_copy_string = JSON.stringify(state)
    var state_copy =  JSON.parse(state_copy_string)
      if(state_copy[2] !== null)
    {
      //if last item user uploaded exceeded 4 mb
      var lastElement = state_copy[2][state_copy[2].length-1];
    if(((((JSON.stringify(lastElement).length)*2)/1024)/1024)>4)
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
    while(((((JSON.stringify(state_copy).length)*2)/1024)/1024)>4.9)
    {
      state_copy[2].shift();
    }
  }
    }
    const serializedState = JSON.stringify(state_copy)
    //Done to prevent setting the local storage with reducer initial state at page refresh
    //reducer initial state is: state = [{height:"32"},[],[]] 
    if (serializedState !== '[{"height":32},[],[{"elementType":"MessageTemplate","serverSide":true,"message":{"TextField":"مساء الخير يا فندم اخبارك ايه اتشرف بالاسم"}}],{"isSending":false}]') {
      localStorage.setItem('storedState', serializedState)
      
    }
  }
  catch (e) {
    console.log(e)
  }
}

function loadFromLocalStorage() {
  try {
    const ss = localStorage.getItem('storedState')
    if (ss === null) {
      const serializedState = '[{"height":32},[],[],{"isSending":false}]'
      //const serializedState = '[{"height":32},[],[]]'
      localStorage.setItem('storedState',serializedState)
      localStorage.setItem('index', -1)
      return JSON.parse(serializedState)
    }
    else {
      return JSON.parse(ss)
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
