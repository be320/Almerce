import Constants from '../Actions/_ActionTypesConst'

const InitialAudioState = {
    isRecording: false,
    blobURL: '',
    isBlocked: false,
  }

  const Reducer =(state = [{height:"35"},[],[]], action)=> {
    switch(action.type){
        case Constants.SUBMIT_TEXTAREA: 
        state[2].push(action.messageTemplate);
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.SUBMIT_VOICENOTE: 
        if (state === [] )
        {state = InitialAudioState}
        state[2].push(action.audioTemplate);
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.SUBMIT_IMAGE:
        return [...state,action.imageTemplate];

        case Constants.RECEIVED_OLD_MESSAGES: 
        return [...state,...action.messageTemplates];
        
        case Constants.SELECT_IMAGES: 
        state[1]=action.selectedImages.listOfImages.concat(state[1]);
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.REMOVE_IMAGES: 
     debugger
        state[1]= [
          ...state[1].slice(0, action.idValue),
          ...state[1].slice(action.idValue + 1)
        ]

        state=JSON.parse(JSON.stringify(state));
        return state
       
        
        case Constants.CHANGE_WINDOW_SIZE:
        state[0]=action.height
        state=[...state]
        return state

        default:
          return state ;
    }
  }
  export default Reducer;