import './_Footer.css'
import Close from '../Dummy/Images/Close.png'

const UploadImageTemplate =(props)=>{
    return<>
    <div>
        <input 
        type="image"
        className="CloseImage" 
        src={Close} 
        alt="Card cap" 
        onClick = {()=>props.removeSelectedImage(props.idValue)}></input>

        <img className="uploadImageTemplate" src={props.itemName} alt="Card cap"/>
    </div>
    </>
}
export default UploadImageTemplate;