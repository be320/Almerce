// The type of action or the intent needs to be implemented 

import Constants from './_ActionTypesConst'
import AxiosInstance from '../../5-Axios/AxiosConfiguration'

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
    else if (Template.elementType === "ImageTemplate")
    {
        return{
            type: Constants.SUBMIT_IMAGE,
            imageTemplate: Template,
        }
    }
}

const apiCallAction=()=> {
    return {
      type: Constants.BEGIN_API_CALL,
    };
  }

const loadOldMessageSuccess =(Templates)=>{
    return{
    type: Constants.RECEIVED_OLD_MESSAGES,
    messageTemplates: Templates,
}

}
export const loadOldMessage=()=> {
    return (dispatch) => {
      dispatch(apiCallAction());
      return  AxiosInstance.post('/v1/301df99f')
      .then((Templates)=>{
        dispatch(loadOldMessageSuccess(Templates.data));
    }).catch((errorMessage)=>{
        throw errorMessage;
    });
    };
}
  

 