import './_Footer.css'
import ImageIcon from '../Dummy/Images/ImageIcon.png' 
import ImageIconPressed from '../Dummy/Images/ImageIconPressed.png' 

const UploadImage =(props,state)=>{
    return<>
   <label htmlFor="myImg"  className="ml-2 m-1 mb-2 "  >
    <img  src={props.ImgInputState?ImageIconPressed:ImageIcon} className="imageIcon " alt="Upload"/>
 </label>
      <input
        id="myImg"
        type="file"
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        onChange={props.handleImageInput}
      />
       </>
    }
    export default UploadImage;