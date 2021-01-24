import './_Body.css'
import AA from '../Dummy/Images/AA.png'

const MessageTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                {props.serverSide && <img src={AA} className="imageMessageTemplateLeft rounded-circle"  alt="ImageMessageTemplate" />}
                <div className={props.serverSide ? ' messageOrientationLeft ' : ' messageOrientationRight '} style ={props.serverSide ? {backgroundColor : "rgb(110, 72, 170)", color:"white"}:{}} >{props.message}</div>
            </div>
        </div>
    </>
}

export default MessageTemplate;
