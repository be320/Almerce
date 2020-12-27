import './_Footer.css'
import SendIcon from '../Dummy/Images/SendIcon.png'

const SendArrow = (props, state) => {
  return <>
    <div class="col">
      <input type="image" id="image" alt="Login" className="sendIcon" src={SendIcon} />
    </div>
  </>
}
export default SendArrow;