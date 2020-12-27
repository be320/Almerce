import A from '../Dummy/Images/A.jpg'
import './_Header.css'
const AlmerceProfile = (props, state) => {
    return <>

        <div class="col">
            <img src={A} className="rounded-circle almerceImage m-1" alt="AlmerceImage" />
        </div>

        <div className="col AlmerceText" >
            Almerce
        </div>

    </>
}



export default AlmerceProfile;