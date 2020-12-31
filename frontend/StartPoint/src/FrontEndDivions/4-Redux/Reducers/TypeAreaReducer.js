// Reducer checks based on the action type passed using switch statement and returns the new state
// to be stored inside the store container

import Constants from '../Actions/_ActionTypesConst'
const TypeAreaReducer =(state = [], action)=> {
    switch(action.type){
        case Constants.SUBMIT_TEXTAREA: 
        return state = state +action.messageTemplate;
         default:
        return state ;
    }
}
export default TypeAreaReducer;


