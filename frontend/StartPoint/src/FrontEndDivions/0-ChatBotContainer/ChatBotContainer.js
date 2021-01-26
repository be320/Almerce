import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './_ChatBotContainer.css';
import BodyContainer from '../2-Body/1-BodyGroup'
import FooterContainer from '../3-Footer/1-FooterGroup'
import { useRef } from "react"
const ChatBotContainer =()=>{
    const ref = useRef({ index: -1});
    return <>
     <div className="chatBotBorder">
     <BodyContainer refIndex={ref}/>
     <FooterContainer refIndex={ref} />
     </div>
    </>  
        
    }
    export default ChatBotContainer;
 
  