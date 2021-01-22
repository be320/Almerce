import React, { useEffect, useState, useRef } from "react"
import MicRecorder from 'mic-recorder-to-mp3'
import './_Footer.css'
import UploadImage from './UploadImage'
import VoiceNote from './VoiceNote'
import SendArrow from './SendArrow'
import TypeArea from './TypeArea'
import * as ChatBotActions from '../4-Redux/Actions/ChatBotActions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";


const FooterContainer = (props) => {
  const inputRef = useRef();


  const InitialAudioState = {
    isRecording: false,
    blobURL: ''
    };
  const [TextField, setTextField] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [AudioState, setAudioState] = useState(InitialAudioState);

 
  useEffect(() => {
  }, []);

  const handleImageSubmit = (event) => {
    event.preventDefault();
    if (selectedImage !== null) {
      props.actions.clientSideActions.sendTemplate(
        {
          elementType: 'ImageTemplate',
          image: { selectedImage }
        }
      );
    }
    setSelectedImage(null);
  }
  const Mp3Recorder = React.useMemo(() => new MicRecorder({
    bitRate: 128
  }), []);

 

  const handleImageInput = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  }
  //---------------------------------Audio--------------------------------------
  const start = () => {
       Mp3Recorder.start().then(() => {
       setAudioState({isRecording : true , blobURL : ''});
      }).catch((e) => console.error(e)); 
  };

  const DeleteVN = () => //user clicked X button
  {
    Mp3Recorder.stop()
    setAudioState(InitialAudioState);
    
  };

  const handleAudioSubmit = (event) => {
    event.preventDefault();

    Mp3Recorder
    .stop()
    .getMp3()
    .then(([buffer, blob]) => {
      const bu = URL.createObjectURL(blob);
        props.actions.clientSideActions.sendTemplate(
          {
            elementType: 'AudioTemplate', 
            audio: { isRecording: false, blobURL :bu }
          }
        );  
      setAudioState(InitialAudioState);
    }).catch((e) => { 
      console.log(e)
    });  
    }
  //---------------------------------Text--------------------------------------
  const onEnterPress = (e) => {
    if(e.key === "Enter") {
      handleTextSubmit(e);
    }
  }

  const handleTextSubmit = (event) => {
    event.preventDefault();
    if (TextField !== '') {
      props.actions.clientSideActions.sendTemplate(
        {
          elementType: 'MessageTemplate',
          serverSide: false,
          message: { TextField }
        }
      );
    }
    else {
      //focus type area 
      inputRef.current.focus();
    }
    setTextField('');
  }

  const handleTextChange = (event) => {
    setTextField(event.target.value);
  }

  const onHeightChange = (height) => {
    props.actions.clientSideActions.sendWindowHeight(
      {
        height: height
      }
    );
  }
 
  return <>
    <div className="footer d-flex flex-row justify-content-between align-items-end">

      <form onSubmit={handleImageSubmit}>
        <UploadImage selectedImage={selectedImage} handleImageInput={handleImageInput} />
      </form>

      <form onSubmit={handleAudioSubmit} >
        <VoiceNote AudioState={AudioState} start={start} DeleteVN={DeleteVN}/>
      </form>

      <form onKeyDown={onEnterPress} className="d-flex flex-row align-items-end" onSubmit={handleTextSubmit}>
        <TypeArea inputRef={inputRef} TextField={TextField} handleTextChange={handleTextChange}
          onHeightChange={onHeightChange} />
        {/* <Emoji TextField={TextField} setTextField={setTextField}/> */}
        <SendArrow TextField={TextField} />
      </form>

    </div>
  </>
}

// this function map the component with the actions
//so this will be passed to this component via props as if the store 
//is the parent of this component.
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      clientSideActions: bindActionCreators(ChatBotActions, dispatch),
    },
  };
}
export default connect(null, mapDispatchToProps)(FooterContainer);

