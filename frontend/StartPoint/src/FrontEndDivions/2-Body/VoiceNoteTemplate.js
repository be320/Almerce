import './_Body.css'
import B from '../Dummy/Images/B.jpg'


const VoiceNoteTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                <div className='p-1 messageOrientationRight ' >
                    <audio src={props.Audio.blobURL} style={{width: "180px"}}controls controlslist="nodownload" />
                </div>
            </div>
        </div>
    </>
}

export default VoiceNoteTemplate;
