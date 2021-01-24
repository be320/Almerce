import './_Footer.css'
import ImageIcon from '../Dummy/Images/ImageIcon.png'
import ImageIconPressed from '../Dummy/Images/ImageIconPressed.png'

const UploadImage = (props, state) => {
  return <>
    <label htmlFor="myImg" className="ml-2 m-1 mb-2 "  >
      {!props.selectedImage && (
        <img src={ImageIcon} className="imageIcon " alt="Upload" />
      )}

      {props.selectedImage && (
        <input type="image" src={ImageIconPressed} className="imageIcon " alt="Send" />
      )}

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