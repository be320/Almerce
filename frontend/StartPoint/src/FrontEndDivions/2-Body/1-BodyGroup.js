import './_Body.css'
import { connect } from "react-redux";
import MessageTemplate from '../2-Body/MessageTemplate'

const BodyContainer=(props)=>{
return<>
<div className="body">

{props.bodyContainer.map(item => { 
  if (item.elementType ==='MessageTemplate'){
    console.log('Message Received');
    return <MessageTemplate
    serverSide={item.serverSide}
    message={item.message.TextField}
    />
  }
})}

{props.VoiceNote.map(item => { 
  if (item.elementType ==='AudioTemplate'){
    console.log('Audio Received');
    console.log('Audio Received');
    return <audio src={item.audio.blobURL} controls="controls" />
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
       bodyContainer: state.TypeAreaReducer,
       VoiceNote: state.VoiceNoteReducer,

    };
  }
export default connect(mapStateToProps)(BodyContainer);

