// Reducer checks based on the action type passed using switch statement and returns the new state
// to be stored inside the store container

const reducer1 =(initialState= 0,action)=> {
    switch(action.type){
        case 'Action1':
        return initialState+1;
         default:
        return 1;
    }

}
export default reducer1;