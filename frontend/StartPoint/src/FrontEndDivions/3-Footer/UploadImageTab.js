import './_Footer.css'
import { connect } from "react-redux";
import UploadImageTemplate from './UploadImageTemplate'
import SendIcon from '../Dummy/Images/SendIcon.png'


const UploadImageTab=(props)=>{
    return<>
    
    <div className='uploadImageTab' style={{bottom: props.footerHeight.height+"px"}}>
       <div>
       <div className='uploadImageTabAddButton' style={{backgroundColor: "rgb(104, 76, 165)"}}>+</div>
       <div className='uploadImageTabAddButton' style={{backgroundColor: "rgb(50, 129, 223)"}}>s</div>
       <div className='uploadImageTabAddButton' style={{backgroundColor: "rgb(225, 12, 12)"}}>x</div>
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