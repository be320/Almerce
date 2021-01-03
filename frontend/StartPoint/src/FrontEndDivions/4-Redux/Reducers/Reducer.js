import Constants from '../Actions/_ActionTypesConst'

const InitialAudioState = {
    isRecording: false,
    blobURL: '',
    isBlocked: false,
  }

  const Reducer =(state, action)=> {
    switch(action.type){
        case Constants.SUBMIT_TEXTAREA: 
        if (typeof state == "undefined" )
        {state = []}
        return [...state,action.messageTemplate];

        case Constants.SUBMIT_VOICENOTE: 
        if (typeof state == "undefined" )
        {state = InitialAudioState}
        return [...state,action.audioTemplate];

        default:
        if (typeof state == "undefined" )
        {state = []}
        return state ;
    }
  }
  export default Reducer;