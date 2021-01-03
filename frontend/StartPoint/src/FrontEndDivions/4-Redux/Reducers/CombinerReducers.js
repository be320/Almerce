// combine reducer used to coombines different reducers together into one single reducer
// to be passed to the store
import {combineReducers} from 'redux'
import Reducer from './Reducer'

const combineReducer = combineReducers({
        Reducer:Reducer
})
export default combineReducer;

//Dispatch takes an action and pass it to the reducer(s)
//There's no such thing as dispatching to a certain reducer. 
//Every time you dispatch an action, all reducer functions are executed. 
//The only way to make sure the right piece of code is executed is to make sure
//the name of the action type is unique, and is present exactly in one reducer among all