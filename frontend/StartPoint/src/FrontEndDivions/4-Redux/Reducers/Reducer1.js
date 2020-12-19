// Reducer checks based on the action type passed using switch statement and returns the new state
// to be stored inside the store container
// You can Modify below code, just for presentation 

const reducer1 =(initialState = 0, action)=> {
    switch(action.type){
        case 'ACTION1':
        return initialState+1000;
         default:
        return 121;
    }

}
export default reducer1;