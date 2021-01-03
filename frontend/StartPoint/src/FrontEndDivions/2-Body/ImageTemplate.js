import './_Body.css'
import B from '../Dummy/Images/B.jpg'

const ImageTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
            <img src={B} className=  ' imageMessageTemplateRight rounded-circle' alt="ImageMessageTemplate" />
                <div className=' messageOrientationRight ' style ={{ width: "250px"}} >
                    <img src={props.image} style={{display: "block", width: "100%", height: "auto"}}/>
                </div>
            </div>
        </div>
    </>
}

export default ImageTemplate;
