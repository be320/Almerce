import './_Footer.css'
import UploadImage from './UploadImage'
import VoiceNote from './VoiceNote';
import SendArrow from './SendArrow';

const FooterContainer =(props, state)=>{
    return<>

    <div class="container footer border rounded-bot">
        <div class="row align-items-center">
             <div class="col">
                 <UploadImage/>
                 <VoiceNote/>
                 <SendArrow/>
             </div>
        </div>
    </div>
    </>
        
    }
    export default FooterContainer;

   