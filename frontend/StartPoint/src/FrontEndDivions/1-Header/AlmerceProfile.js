import A from '../Dummy/Images/A.jpg'
import './_Header.css'
const AlmerceProfile = (props, state) => {
    return <>

        <div className="almerceImageAndTextPostion">
            <img src={A} className="almerceImage" alt="AlmerceImage" />
        </div>

        <div className="almerceText almerceImageAndTextPostion" >
            Almerce
        </div>

    </>
}



export default AlmerceProfile;