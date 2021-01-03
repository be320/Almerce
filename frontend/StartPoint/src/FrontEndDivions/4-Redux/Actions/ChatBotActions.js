// The type of action or the intent needs to be implemented 

import Constants from './_ActionTypesConst'

// use this format in case you will use bindActionCreators
export const Action =(Template)=>{

    if(Template.elementType === "MessageTemplate")
    {
        return{
        type: Constants.SUBMIT_TEXTAREA,
        messageTemplate: Template,
        }
    }
    else if (Template.elementType === "AudioTemplate")
    {
        return{
            type: Constants.SUBMIT_VOICENOTE,
            audioTemplate: Template,
        }
    }
}
 