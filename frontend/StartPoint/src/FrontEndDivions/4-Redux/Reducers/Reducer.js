import Constants from '../Actions/_ActionTypesConst'

const InitialAudioState = {
    isRecording: false,
    blobURL: '',
    isBlocked: false,
  }

  const Reducer =(state = [{height:"32"},[],[],{isSending:false}], action)=> {
    switch(action.type){

        case Constants.SUBMIT_TEXTAREA: 
        state[2].push(action.messageTemplate);
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.BEGIN_API_CALL:
          state[3]={isSending:true}
          state=JSON.parse(JSON.stringify(state));
          return state

        case Constants.END_API_CALL:
          state[3]={isSending:false}
          state=JSON.parse(JSON.stringify(state));
          return state
  
        case Constants.SUBMIT_VOICENOTE: 
        if (state === [] )
        {state = InitialAudioState}
        state[2].push(action.audioTemplate);
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.DISPLAY_CHOICE: 
        state[2].push(action.choiceTemplate);
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.DISPLAY_CARD: 
        state[2].push(action.cardTemplate);
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.SUBMIT_IMAGE:
        state[2].push(action.imageTemplate);
        state[1]=[]
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.RECEIVED_OLD_MESSAGES: 
        return [...state,...action.messageTemplates];
        
        case Constants.SELECT_IMAGES: 
        state[1]=action.selectedImages.listOfImages.concat(state[1]);
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.REMOVE_IMAGES: 
        state[1]= state[1].filter(element => element.idValue !== parseInt(action.idValue.idValue));
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.TEMPLATE_TO_DELETE: 
        var lastItem=state[2];
        lastItem=lastItem[lastItem.length-1];
        if (action.TemplateToDelete.elementName!=="starRating"){
          lastItem={...lastItem,choices:[], elementType: "MessageTemplate" }
        }
        else{
          lastItem={...lastItem,
            serverSide: false,
            rating:action.TemplateToDelete.rating
          }
        }
       
        state[2]= state[2].filter((_,i) => i !== state[2].length-1);
        state[2].push(lastItem);
        state=JSON.parse(JSON.stringify(state));
        return state
        
        case Constants.CHANGE_WINDOW_SIZE:
        state[0]=action.height
        state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.SUBMIT_RATING:
          state[2].push(action.rating);
          state=JSON.parse(JSON.stringify(state));
        return state

        case Constants.SUBMIT_PRICE_RANGE:
          state[2].push(action.price);
          state=JSON.parse(JSON.stringify(state));
        return state

        default:
          return state 
    }
  }
  export default Reducer;