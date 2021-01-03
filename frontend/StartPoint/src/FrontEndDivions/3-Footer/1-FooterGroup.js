import React, { useEffect, useState } from "react"
import MicRecorder from 'mic-recorder-to-mp3'
import './_Footer.css'
import UploadImage from './UploadImage'
import VoiceNote from './VoiceNote'
import SendArrow from './SendArrow'
import TypeArea from './TypeArea'
import * as ChatBotActions from '../4-Redux/Actions/ChatBotActions'
import MessageTemplate from '../2-Body/MessageTemplate'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const FooterContainer = (props) => {

  const InitialAudioState = {
    isRecording: false,
    blobURL: '',
    isBlocked: false,
  }
  const [TextField, setTextField] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [AudioState, setAudioState] = useState(InitialAudioState);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ audio: true },
      () => {
        setAudioState({ isBlocked: false });
      },
      () => { setAudioState({ isBlocked: true }); });
  }, []);

  const Mp3Recorder = React.useMemo(() => new MicRecorder({
    bitRate: 128
  }), []);

  const handleInputChange = (event) => {
    setTextField(event.target.value);
  }

  const handleImageInput = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
   
    if (TextField !== '')
    {
      props.actions.clientSideActions.Action(
        {
          elementType: 'MessageTemplate',
          serverSide:false ,
          message:{TextField},
        }
        );
    }
    if (AudioState.blobURL !== '')
    {
      props.actions.clientSideActions.Action(
        {
          elementType: 'AudioTemplate',
          audio:{AudioState},
        }
        );
    }

    if (selectedImage !== null)
    {
      props.actions.clientSideActions.Action(
        {
          elementType: 'ImageTemplate',
          image:{selectedImage},
        }
        );
    }
    
    setTextField('');
    setSelectedImage(null);
    setAudioState(InitialAudioState);
  }

  const start = () => {

    if (AudioState.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder.start().then(() => {
        setAudioState({ isRecording: true });
      }).catch((e) => console.error(e));
    }
  };

  const stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const bu = URL.createObjectURL(blob)
        setAudioState({ blobURL: bu, isRecording: false });
      }).catch((e) => console.log(e));
  };

  return <>
  <form  className="footer d-flex flex-row justify-content-between align-items-center" onSubmit={handleSubmit}>
      <UploadImage handleImageInput={handleImageInput} />
      <VoiceNote start={start} stop={stop} AudioState={AudioState} />
      <TypeArea TextField={TextField} handleInputChange={handleInputChange}/>
      {/* <Emoji TextField={TextField} setTextField={setTextField}/> */}
      <SendArrow/>
    </form>
  </>

}


// this function map the component with the actions
//so this will be passed to this component via props as if the store 
//is the parent of this component.
const mapDispatchToProps=(dispatch)=>{
  return{
    actions: {
      clientSideActions: bindActionCreators(ChatBotActions, dispatch),
    },
  };
}
export default connect(null, mapDispatchToProps)(FooterContainer);

