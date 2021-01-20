import React, { useEffect, useState,useRef} from "react"
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
  const inputRef = useRef();
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

      //API Call 
     props.actions.clientSideActions.loadOldMessage();
     
  }, []);

  const Mp3Recorder = React.useMemo(() => new MicRecorder({
    bitRate: 128
  }), []);

  const handleTextChange = (event) => {
    setTextField(event.target.value);
  }

  const handleImageInput = (event) => {
    setSelectedImage(URL.createObjectURL(event.target.files[0]));
  }

  const CallFormActions = () => {
    if (TextField !== '')
    {
      
      props.actions.clientSideActions.sendTemplate(
        {
          elementType: 'MessageTemplate',
          serverSide:false ,
          message:{TextField}
        }
        );
    }
    if (AudioState.blobURL !== '')
    {
      props.actions.clientSideActions.sendTemplate(
        {
          elementType: 'AudioTemplate',
          audio:{AudioState}
        }
        );
    }
    if (selectedImage !== null)
    {
      props.actions.clientSideActions.sendTemplate(
        {
          elementType: 'ImageTemplate',
          image:{selectedImage}
        }
        );
    }
    if (TextField === '' && AudioState.blobURL === '' && selectedImage === null){
      //focus type area when all user inputs are empty
      inputRef.current.focus();
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    CallFormActions();
   //Resetting Form  
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

  const DeleteVN =() => //user clicked X button
  {
    Mp3Recorder.stop()
    setAudioState(InitialAudioState);
  };
  const StopRecord = () => { //user clicked send while mic is recording

    if (AudioState.isRecording)
  {
    stop();
  }
  }
  

  const onHeightChange = (height)=>{
    props.actions.clientSideActions.sendWindowHeight(
      {
        height: height
      }
      );

  }

  return <>
  <form  className="footer d-flex flex-row justify-content-between align-items-end" onSubmit={handleSubmit}>
  <UploadImage ImgInputState={selectedImage} handleImageInput={handleImageInput} />
      <VoiceNote start={start} stop={stop} DeleteVN={DeleteVN} AudioState={AudioState} />
      <TypeArea  inputRef={inputRef} TextField={TextField} handleTextChange={handleTextChange}
      onHeightChange={onHeightChange}/>
      {/* <Emoji TextField={TextField} setTextField={setTextField}/> */}
      <SendArrow StopRecord={StopRecord}/>
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

