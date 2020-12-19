// combine reducer used to coombines different reducers together into one single reducer to be passed to the store

import {combineReducers} from 'redux'
import reducer1 from './Reducer1'

const combineReducer = combineReducers({
    reducer1:reducer1
})
export default combineReducer;