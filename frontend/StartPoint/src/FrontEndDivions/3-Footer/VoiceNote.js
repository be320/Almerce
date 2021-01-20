import React from 'react';
import './_Footer.css'
import MicOn from '../Dummy/Images/MicOn.gif' 
import MicOff from '../Dummy/Images/MicOff.png' 
import Close from '../Dummy/Images/Close.png' 

const VoiceNote =(props)=>{
    
    return<>
    
    {!props.AudioState.isRecording && (
      <div>
      <img className="micOff m-1"  onClick={props.start} src={MicOff} alt="Click to record"/>  
      </div>
      )}
 
      {props.AudioState.isRecording && (
        <div className=" mt-1  ">
              <img src={Close} onClick={props.DeleteVN} className="Close" alt="click to delete record"/> 
              <img className="micOn m-1" onClick={props.stop}  src={MicOn} alt="click to save record"/>

        </div>
      )}

  
     
    </>
    }
    export default VoiceNote;