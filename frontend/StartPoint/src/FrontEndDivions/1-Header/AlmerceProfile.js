import A from '../Dummy/Images/A.jpg' 
import './_Header.css'
const AlmerceProfile =(props,state)=>{
    return<>
     <div  class="row">
            <img src={A} className="   rounded-circle almerceImage " alt="AlmerceImage"/> 
            <div className="AlmerceText">Almerce</div>
     </div>
    </>
    }
    
    
    
    export default AlmerceProfile;