import './_Body.css'
import B from '../Dummy/Images/B.jpg'

const ImageTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                <div className=' messageOrientationRight ' style ={{ width: "250px"}} >
                    <img src={props.image} style={{display: "block", width: "100%", height: "auto"}}/>
                </div>
            </div>
        </div>
    </>
}

export default ImageTemplate;
