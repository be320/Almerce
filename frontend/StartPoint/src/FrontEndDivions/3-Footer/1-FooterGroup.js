import React, { useState,useEffect, useRef } from "react"
import MicRecorder from 'mic-recorder-to-mp3'
import './_Footer.css'
import UploadImage from './UploadImage'
import VoiceNote from './VoiceNote'
import SendArrow from './SendArrow'
import TypeArea from './TypeArea'
import * as ChatBotActions from '../4-Redux/Actions/ChatBotActions'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import UploadImageTab from './UploadImageTab'
import {imageProcessor} from './ImageProcessing'
import {audioProcessor} from './AudioProcessing'
var flag;


const FooterContainer = (props) => {
  const inputRef = useRef();
  const InitialAudioState = {
    isRecording: false,
    blobURL: '',
    };

  const [TextField, setTextField] = useState('');
  const [ImgTest, setImgTest] = useState('');
  const [AudioState, setAudioState] = useState(InitialAudioState);

  const Mp3Recorder = React.useMemo(() => new MicRecorder({
    bitRate: 128
  }), []);

  useEffect(() => {
    if (ImgTest!=='')
    props.actions.clientSideActions.updateImagesList(
      {
        listOfImages: ImgTest,
      }
)
  },[ImgTest]);
  
 

//---------------------------------Image--------------------------------------
  const handleImageSubmit = (event) => {
    var temp = parseInt(localStorage.getItem('index'), 10); 
       props.actions.clientSideActions.sendSelectedImages(
      {
        
          elementType: 'ImageTemplate',
          serverSide: false,
          imageList: props.selectedImages,
          index:temp+1
        
      }
      );
      localStorage.setItem('index',  JSON.stringify(temp+1))
  }
  

  const handleImageInput = (event) => {
    var listOfImages=[]
    var count = props.selectedImages.length 
     Array.from(event.target.files).forEach(async item => {
    listOfImages.push(  {imageURL:await imageProcessor(item),
          idValue:count++})
          setImgTest(listOfImages);
      });

    event.target.value='';  
  }

  const removeSelectedImage=(event)=>{
    props.actions.clientSideActions.removeImages(
      {
        idValue: event.target.getAttribute("idValue")
      }
    )
  }


  //---------------------------------Audio--------------------------------------
  const start = () => {
    Mp3Recorder.start().then(() => {
      setAudioState({isRecording : true , blobURL : ''});
     }).catch((e) => console.error(e)); 
   flag = setTimeout(() => {
    Mp3Recorder
    .stop()
    .getMp3()
    .then(async([buffer, blob]) => {
      const bu = await audioProcessor(blob);
      console.log("Timeout stop")
      var temp = parseInt(localStorage.getItem('index'), 10); 
        props.actions.clientSideActions.sendAudioMessage(
          {
            elementType: 'AudioTemplate', 
            audio: { isRecording: false, blobURL :bu},
            index:temp+1
          }
        );  
        localStorage.setItem('index',  JSON.stringify(temp+1))
      setAudioState(InitialAudioState);
    }).catch((e) => { 
      console.log(e)
    });  
    }, 60000);
    
  };
  
  const DeleteVN = () => //user clicked X button
  {
    Mp3Recorder.stop()
    setAudioState(InitialAudioState);

  };

  const handleAudioSubmit =  (event) => {
    event.preventDefault();
    console.log("Submit stop")
    debugger
    clearTimeout(flag);
    Mp3Recorder
    .stop()
    .getMp3()
    .then(async([buffer, blob]) => {
      const bu = await audioProcessor(blob);
      var temp = parseInt(localStorage.getItem('index'), 10); 
        props.actions.clientSideActions.sendAudioMessage(
          {
            elementType: 'AudioTemplate', 
            audio: { isRecording: false, blobURL :bu},
            index:temp+1
          }
        );  
        localStorage.setItem('index',  JSON.stringify(temp+1))
      setAudioState(InitialAudioState);
    }).catch((e) => { 
      console.log(e)
    });  
    }
  //---------------------------------Text--------------------------------------
  const handleTextChange = (event) => {
    setTextField(event.target.value);
  }

  const onHeightChange = (h) => {
    props.actions.clientSideActions.sendWindowHeight(
      {
        height: h+8
      }
    );
  }
  
  const onEnterPress = (e) => {
    if(e.key === "Enter") {
      handleTextSubmit(e);
    }
  }

  const handleTextSubmit = (event) => {
    event.preventDefault();

    if (TextField !== '') {
    
      var temp = parseInt(localStorage.getItem('index'), 10); 
      props.actions.clientSideActions.sendTemplate(
        {
          elementType: 'MessageTemplate',
          serverSide: false,
          message: { TextField },
          index:temp+1

        }
      );
      localStorage.setItem('index',  JSON.stringify(temp+1))
    }
    else {
      //focus type area 
      inputRef.current.focus();
    }
    setTextField('');
  }
  
  return <>
  {props.selectedImages.length!==0 ? 
   <UploadImageTab
    handleImageSubmit={handleImageSubmit} 
    removeSelectedImage={removeSelectedImage}/>:''
  }
  <div className="footer d-flex flex-row justify-content-between align-items-end">
      <form>
        <UploadImage imagesLength={props.selectedImages.length} handleImageInput={handleImageInput} />
      </form>

      <form onSubmit={handleAudioSubmit} >
        <VoiceNote AudioState={AudioState} start={start} DeleteVN={DeleteVN}/>
      </form>

      <form onKeyDown={onEnterPress} className="d-flex flex-row flex-grow-1 flex-shrink-0 align-items-end" onSubmit={handleTextSubmit}>
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

const mapStateToProps =(state)=>{
  return {
    selectedImages: state[1],
    footerHeight: state[0],
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterContainer);