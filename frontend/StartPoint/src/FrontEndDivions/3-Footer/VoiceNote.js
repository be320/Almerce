import './_Footer.css'
import MicOn from '../Dummy/Images/MicOn.png' 
import MicOff from '../Dummy/Images/MicOff.png' 



const VoiceNote =(props,state)=>{
    return<>
      <img src={MicOff} className="micOff" oncalt="Click to speak"/> 
    </>
    }
    export default VoiceNote;