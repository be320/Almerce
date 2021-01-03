import './_Body.css'
import B from '../Dummy/Images/B.jpg'


const VoiceNoteTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
            <img src={B} className= ' imageMessageTemplateRight rounded-circle' alt="ImageMessageTemplate" />
                <div className=' messageOrientationRight ' >
                    <audio src={props.Audio.blobURL} style={{width: "180px", }}controls controlslist="nodownload" />
                </div>
            </div>
        </div>
    </>
}

export default VoiceNoteTemplate;
