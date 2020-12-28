import React, { useEffect, useState } from "react"
import MicRecorder from 'mic-recorder-to-mp3'
import './_Footer.css'
import UploadImage from './UploadImage'
import VoiceNote from './VoiceNote'
import SendArrow from './SendArrow'
import TypeArea from './TypeArea'
import Emoji from './Emoji'



const FooterContainer = (props, state) => {

  const InitialAudioState = {
    isRecording: false,
    blobURL: '',
    isBlocked: false,
  }
  const [TextField, setTextField] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [AudioState, setAudioState] = useState(InitialAudioState);

  useEffect(() => {
    navigator.getUserMedia({ audio: true },
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
    setSelectedImage(event.target.files[0]);

  }

  const handleSubmit = (event) => {
    //console.log(event);
    event.preventDefault();
     console.log(TextField);
    console.log(selectedImage);
    console.log(AudioState);
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
        console.log(AudioState);
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
  <form  onSubmit={handleSubmit}>
    <div className="form-row">
      <UploadImage handleImageInput={handleImageInput} />
      <VoiceNote start={start} stop={stop} AudioState={AudioState} />
      <TypeArea TextField={TextField} setTextField={setTextField} handleInputChange={handleInputChange}/>
      <SendArrow/>
      <Emoji TextField={TextField} setTextField={setTextField}/>
    </div>
    </form>
  </>

}
export default FooterContainer;

