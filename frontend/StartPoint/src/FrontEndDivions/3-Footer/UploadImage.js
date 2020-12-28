import './_Footer.css'
import ImageIcon from '../Dummy/Images/ImageIcon.png' 



const UploadImage =(props,state)=>{
    return<>
   
   <label htmlFor="myImg">
    <img src={ImageIcon} className="imageIcon" alt="Upload an image"/>
 </label>
      <input
        id="myImg"
        type="file"
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        onChange={props.handleImageInput}
      />  </>

    }
    export default UploadImage;