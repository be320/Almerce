import Constants from '../Actions/_ActionTypesConst'

const InitialAudioState = {
    isRecording: false,
    blobURL: '',
    isBlocked: false,
  }

  const Reducer =(state = [{height:"38"}], action)=> {
    switch(action.type){
        case Constants.SUBMIT_TEXTAREA: 
        return [...state,action.messageTemplate];

        case Constants.SUBMIT_VOICENOTE: 
        if (state === [] )
        {state = InitialAudioState}
        return [...state,action.audioTemplate];

        case Constants.SUBMIT_IMAGE:
        return [...state,action.imageTemplate];

        case Constants.RECEIVED_OLD_MESSAGES: 
        return [...state,...action.messageTemplates];

        case Constants.CHANGE_WINDOW_SIZE:
          state[0]=action.height
          state=[...state]
          return state

        default:
        return state ;
    }
  }
  export default Reducer;