import './_Footer.css'
import ImageIcon from '../Dummy/Images/ImageIcon.png' 
import AddMore from '../Dummy/Images/AddMore.png'


const UploadImage =(props,state)=>{
    return<>
   <label htmlFor="myImg"  className="ml-2 m-1 mb-2 "  >
    <img  src={props.imagesLength!==0?AddMore:ImageIcon} className="imageIcon " alt="Upload"/>
 </label>
      <input
        id="myImg"
        type="file"
        accept="image/png, image/jpeg"
        style={{ display: "none" }}
        onChange={props.handleImageInput}
        multiple
      />
      </>
    }
    export default UploadImage;



    