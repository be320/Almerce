import React from 'react';
import './_Footer.css'
import MicOn from '../Dummy/Images/MicOn.png' 
import MicOff from '../Dummy/Images/MicOff.png' 

const VoiceNote =(props)=>{
    
    const [isOn, SetisOn] = React.useState(false);

    return<>
    <div class="col">
    {!props.AudioState.isRecording && (
      <img className="micOff"  onClick={props.start} src={MicOff} />  

      )}
 
      {props.AudioState.isRecording && (
              <img className="micOn" onClick={props.stop}  src={MicOn} />  

      )}
    </div>
     
    </>
    }
    export default VoiceNote;