import './_Footer.css'
import MicIcon from '@material-ui/icons/Mic';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import IconButton from "@material-ui/core/IconButton";
import { useState, useEffect } from 'react'

const VoiceNote = (props) => {

  const [ToggleVar, setToggleVar] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setToggleVar(!ToggleVar);
    }, 500);
  }, [ToggleVar]);

  return <>
    {!props.AudioState.isRecording && (
      <div>
        <IconButton className="iconBtn mb-1" size="small" onClick={props.start} alt="Record">
          <MicIcon style={{ color: "rgb(110, 72, 170)" }} />
        </IconButton>
      </div>
    )}

    {props.AudioState.isRecording && (
      <div className="d-flex flex-column mt-1 align-items-center">

        <IconButton className="iconBtn" size="small" color="secondary" onClick={props.DeleteVN} alt="Delete record">
          <HighlightOffIcon style={{ color: "fushia" }} fontSize="small" alt="click to delete record" />
        </IconButton>

        <IconButton type="submit" className="iconBtn mb-1" size="small" alt="Send record">
          {ToggleVar && (<MicIcon style={{ color: "gray" }} /> )}
          {!ToggleVar && (<MicIcon style={{ color: "red" }} /> )}
        </IconButton>
        
      </div>
    )}
  </>
}
export default VoiceNote;