import './_Body.css'

const VoiceNoteTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                <div className='pt-1 pb-0 px-1 w-100 messageOrientationRight ' >
                    <audio src={props.Audio.blobURL} className="w-100 m-auto"controls controlslist="nodownload" />
                </div>
            </div>
        </div>
    </>
}

export default VoiceNoteTemplate;
