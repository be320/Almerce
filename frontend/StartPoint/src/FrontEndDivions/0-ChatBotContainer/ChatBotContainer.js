import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './_ChatBotContainer.css';
import BodyContainer from '../2-Body/1-BodyGroup'
import FooterContainer from '../3-Footer/1-FooterGroup'
const ChatBotContainer =()=>{
    return <>
     <div className="chatBotBorder">
     <BodyContainer />
     <FooterContainer />
     </div>
    </>  
        
    }
    export default ChatBotContainer;
 
  