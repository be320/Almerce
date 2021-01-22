import './_Footer.css'
import SendIcon from '../Dummy/Images/SendIcon.png'
import SendIconPressed from '../Dummy/Images/SendIconPressed.png'

const SendArrow = (props, state) => {
  return <>
      <input type="image" id="image" alt="Send" className="sendIcon m-1 mr-2 mb-2"  
      src={props.TextField === ''? SendIcon:SendIconPressed} />
  </>
}
export default SendArrow;