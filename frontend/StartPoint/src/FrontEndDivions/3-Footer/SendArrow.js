import './_Footer.css'
import SendIcon from '../Dummy/Images/SendIcon.png'
import SendIconPressed from '../Dummy/Images/SendIconPressed.png'
import { useState} from "react"

const SendArrow = (props, state) => {
  const [ImgSrc, SetImgSrc] = useState(SendIcon);
  // onmousedown == when user click btn ; onmouseup == when user unclick button
  return <>
      <input type="image" id="image" alt="Login" className="sendIcon m-1 mr-2 mb-2" src={ImgSrc}  
     onClick={props.StopRecord} onMouseDown={()=> {SetImgSrc(SendIconPressed)}} onMouseUp={()=> {SetImgSrc(SendIcon)}} />
  </>
}
export default SendArrow;