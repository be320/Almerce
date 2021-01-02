// The type of action or the intent needs to be implemented 

import Constants from './_ActionTypesConst'

// use this format in case you will use bindActionCreators
export const TypeAreaAction =(messageTemplate)=>{

    return{
        type: Constants.SUBMIT_TEXTAREA,
        messageTemplate: messageTemplate,
    }
}

export const VoiceNoteAction =(audioTemplate)=>{

    return{
        type: Constants.SUBMIT_VOICENOTE,
        audioTemplate: audioTemplate,
    }
}

 