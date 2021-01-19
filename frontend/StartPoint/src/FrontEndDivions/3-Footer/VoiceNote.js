import React from 'react';
import './_Footer.css'
import MicOn from '../Dummy/Images/MicOn.gif' 
import MicOff from '../Dummy/Images/MicOff.png' 

const VoiceNote =(props)=>{
    
    return<>
    <div>
    {!props.AudioState.isRecording && (
      <img className="micOff m-1"  onClick={props.start} src={MicOff} alt="Click to record"/>  

      )}
 
      {props.AudioState.isRecording && (
              <img className="micOn m-1" onClick={props.stop}  src={MicOn} alt="click to save record"/>  

      )}
    </div>
     
    </>
    }
    export default VoiceNote;