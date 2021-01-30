import { Rating } from '@material-ui/lab';
import React, { useState ,useRef, useEffect } from "react"

 const  SimpleRating = (props) => {
  const [value, setValue] = useState(props.val);

  // //Run only on update, doesn't runs on mount
  //   const didMount = useRef(false);
  //   useEffect(() => {
  //     if (didMount.current) {
  //       props.changeRating(value)
  //      // localStorage.setItem('value', value)
  //     } else {
  //       didMount.current = true;
  //     }
  //   }, [value]);

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


      