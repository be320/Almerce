import { Rating } from '@material-ui/lab';
import React, { useState } from "react"

 const  SimpleRating = (props) => {
 const [value, setValue] = useState(props.val);

  return<>
    <div className=" messageTemplateContainer ">
    <div className='fixingSizeOrientationRight' >
    <div className="messageOrientationRight d-flex justify-content-center flex-wrap" style={{backgroundColor : "rgb(110, 72, 170)"}} >
    {(value===0) && (<Rating name="simple-controlled" precision={1} value={value} onChange={(event,newValue) => {props.changeRating(event,newValue)
    setValue(newValue)}}/>)}
    {(value!==0) && ( <Rating name="read-only"  precision={1} value={value} readOnly />)}
    </div>
    </div>
  </div>
</>
 }
      export default SimpleRating;


      