import './_Footer.css'
import SendIcon from '../Dummy/Images/SendIcon.png'

const SendArrow = (props, state) => {
  return <>
      <input type="image" id="image" alt="Login" className="sendIcon mr-2" src={SendIcon} />
  </>
}
export default SendArrow;