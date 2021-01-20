import './_Body.css'
import A from '../Dummy/Images/A.jpg'

const MessageTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                {props.serverSide && <img src={A} className="imageMessageTemplateLeft rounded-circle"  alt="ImageMessageTemplate" />}
                <div className={props.serverSide ? ' messageOrientationLeft ' : ' messageOrientationRight '} style ={props.serverSide ? {backgroundColor : "#E5CCFF"}:{}} >{props.message}</div>
            </div>
        </div>
    </>
}

export default MessageTemplate;
