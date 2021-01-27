// The type of action or the intent needs to be implemented 

import Constants from './_ActionTypesConst'
import AxiosInstance from '../../5-Axios/AxiosConfiguration'

// use this format in case you will use bindActionCreators

const apiCallAction=()=> {
    return {
      type: Constants.BEGIN_API_CALL,
    };
  }

const sendTemplateSuccess = (Template)=>{
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
    else if (Template.elementType === "ChoiceTemplate")
    {
        return{
            type: Constants.DISPLAY_CHOICE,
            choiceTemplate: Template,
        }
    }

    else if (Template.elementType === "ProductCardTemplate")
    {
        return{
            type: Constants.DISPLAY_CARD,
            cardTemplate: Template,
        }
    }
    else if (Template.elementType === "StarRatingTemplate")
    {
        return{
            type: Constants.SUBMIT_RATING,
            rating: Template,
        }
    }
    
    
}

const loadOldMessageSuccess =(Templates)=>{
    return{
    type: Constants.RECEIVED_OLD_MESSAGES,
    messageTemplates: Templates,
}

}
export const sendWindowHeight=(height)=>{
    return{
        type: Constants.CHANGE_WINDOW_SIZE,
        height: height,
    }
}
export const updateImagesList=(selectedImages)=>{
    return{
        type: Constants.SELECT_IMAGES,
        selectedImages: selectedImages,
    }
}
export const removeImages=(idValue)=>{
    return{
        type: Constants.REMOVE_IMAGES,
        idValue: idValue,
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
 
//ai Template gaia mn FooterGroup (will show on body)
export const sendTemplate=(Template)=>{
    return((dispatch)=>{
        console.log(Template);
       // dispatch(apiCallAction());
        dispatch(sendTemplateSuccess(Template))
        // return  AxiosInstance.post('/sendText',{
        //     // place here your object 
        //     Template
        // }).then((response)=>{ 
        //         console.log(response.data);
        //         dispatch(sendTemplateSuccess(Template))
        //         dispatch(sendTemplateSuccess(response.data.Template))  
        // }).catch((errorMessage)=>{
        //     console.log(errorMessage);
        // });
    });
}

//ai Template gaia mn bodyGroup (won't show on body)
export const sendOneWayTemplate=(Template)=>{
    return((dispatch)=>{
        console.log(Template);
        dispatch(apiCallAction());
        return  AxiosInstance.post('/sendText',{
            // place here your object 
            Template
        }).then((response)=>{ 
                console.log(response.data);
                dispatch(sendTemplateSuccess(Template))  
                dispatch(sendTemplateSuccess(response.data))  
        }).catch((errorMessage)=>{
            console.log(errorMessage);
        });

    });
}

export const sendSelectedImages=(Template)=>{
    return((dispatch)=>{
        console.log(Template);
       dispatch(apiCallAction());
        dispatch(sendTemplateSuccess(Template))
        return  AxiosInstance.post('/sendImagesList',{
            // place here your object 
            Template
        }).then((response)=>{ 
            dispatch(sendTemplateSuccess(Template))
            dispatch(sendTemplateSuccess(response.data))  
        }).catch((errorMessage)=>{
            console.log(errorMessage);
        });

    });
}

export const sendAudioMessage=(Template)=>{
    return((dispatch)=>{
        console.log(Template);
        dispatch(apiCallAction());
        return  AxiosInstance.post('/sendAudioMessage',{
            // place here your object 
            Template
        }).then((response)=>{ 
            dispatch(sendTemplateSuccess(Template))
            dispatch(sendTemplateSuccess(response.data))  
        }).catch((errorMessage)=>{
            console.log(errorMessage);
        });

    });
}

export const sendchangeRating=(Template)=>{
    return((dispatch)=>{
        console.log(Template);
        dispatch(apiCallAction());
        return  AxiosInstance.post('/sendchangeRating',{
            // place here your object 
            Template
        }).then((response)=>{ 
            dispatch(sendTemplateSuccess(response.data))  
        }).catch((errorMessage)=>{
            console.log(errorMessage);
        });

    });
}



