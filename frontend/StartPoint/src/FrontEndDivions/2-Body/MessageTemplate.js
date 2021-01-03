import './_Body.css'
import A from '../Dummy/Images/A.jpg'
import B from '../Dummy/Images/B.jpg'

const MessageTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                <img src={B} className={props.serverSide ? ' imageMessageTemplateLeft rounded-circle' : ' imageMessageTemplateRight rounded-circle'} alt="ImageMessageTemplate" />
                <div className={props.serverSide ? ' messageOrientationLeft ' : ' messageOrientationRight '} >{props.message}</div>
            </div>
        </div>
    </>
}

export default MessageTemplate;
