
import Constants from '../Actions/_ActionTypesConst'

const InitialAudioState = {
    isRecording: false,
    blobURL: '',
    isBlocked: false,
  }

const VoiceNoteReducer =(state = [InitialAudioState], action)=> {
    switch(action.type){
        case Constants.SUBMIT_VOICENOTE: 
        return [...state,action.audioTemplate];
         
        default:
        return state ;
    }
}
export default VoiceNoteReducer;