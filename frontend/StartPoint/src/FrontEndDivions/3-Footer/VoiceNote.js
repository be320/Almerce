import React from 'react';
import './_Footer.css'
import MicOn from '../Dummy/Images/MicOn.png' 
import MicOff from '../Dummy/Images/MicOff.png' 

const VoiceNote =(props)=>{
    
    return<>
    <div>
    {!props.AudioState.isRecording && (
      <img className="micOff"  onClick={props.start} src={MicOff} alt="Click to record"/>  

      )}
 
      {props.AudioState.isRecording && (
              <img className="micOn" onClick={props.stop}  src={MicOn} alt="click to save record"/>  

      )}
    </div>
     
    </>
    }
    export default VoiceNote;