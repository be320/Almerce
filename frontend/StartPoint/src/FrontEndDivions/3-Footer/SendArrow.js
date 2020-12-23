import './_Footer.css'
import SendIcon from '../Dummy/Images/SendIcon.png' 

const SendArrow =(props,state)=>{
    return<>
      <img src={SendIcon} className="sendIcon" oncalt="Click to send text"/> 
  </>
    }
    export default SendArrow;