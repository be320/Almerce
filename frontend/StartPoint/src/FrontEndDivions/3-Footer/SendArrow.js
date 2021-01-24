import './_Footer.css'
import SendIcon from '@material-ui/icons/Send';
import IconButton from "@material-ui/core/IconButton";

const SendArrow = (props, state) => {
  return <>
      <div>
        <IconButton  type="submit" className="iconBtn mb-1" size="small">
        {props.TextField === '' && (<SendIcon className="iconBtn ml-1" fontSize="small" style={{ color:" rgb(157, 128, 202)"}} />)}
        {props.TextField !== '' && (<SendIcon className="iconBtn ml-1" fontSize="small" style={{color:"rgb(110, 72, 170)"}} alt="Send"/>)}
        </IconButton>
      </div>  
  </>
}
export default SendArrow;