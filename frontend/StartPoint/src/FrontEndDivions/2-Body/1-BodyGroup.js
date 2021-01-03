import './_Body.css'
import { connect } from "react-redux";
import MessageTemplate from '../2-Body/MessageTemplate'
import VoiceNoteTemplate from './VoiceNoteTemplate';

const BodyContainer=(props)=>{
return<>
<div className="body">

{props.bodyContainer.map(item => { 
  if (item.elementType ==='MessageTemplate'){
    console.log('Message Received');
    return <MessageTemplate
    serverSide={item.serverSide}
    message={item.message.TextField}
    />}
    else if (item.elementType =='AudioTemplate'){
      console.log('Audio Received');
      return <VoiceNoteTemplate
       serverSide={item.serverSide}
      Audio={item.audio.AudioState}/>
      // <audio src={item.audio.AudioState.blobURL} style={{float :'right'}} controls="controls" />
    }
})}


</div>
</>
}

//this function map the component with the state stored in the store
//so this will be passed to this component via props as if the store 
//is the parent of this component
const mapStateToProps =(state)=>{
    return {
       bodyContainer: state.Reducer
    };
  }
export default connect(mapStateToProps)(BodyContainer);

