import './_Footer.css'
import { connect } from "react-redux";
import UploadImageTemplate from './UploadImageTemplate'
import SendIconPressed from '../Dummy/Images/SendIconPressed.png' 


const UploadImageTab=(props)=>{
    console.log(props.selectedImages)
    return<>
    
    <div className='uploadImageTab' style={{bottom: props.footerHeight.height+"px"}}>
        <div  className='uploadImageTabAddButtonContainer'>
        <input 
        className='uploadImageTabAddButton' 
        type="image" 
        src={SendIconPressed}
        onClick={props.handleImageSubmit}
        alt="" />
       </div>
        {
                props.selectedImages.map(item=> <UploadImageTemplate 
                idValue={item.idValue}
                removeSelectedImage={props.removeSelectedImage}
                itemName={item.imageURL}/>)
        }

    </div>
    </>
}

const mapStateToProps =(state)=>{
    return {
       selectedImages: state[1],
       footerHeight: state[0],
    };
  }
  
export default connect(mapStateToProps)(UploadImageTab);
// <UploadImageTemplate itemName={item}




