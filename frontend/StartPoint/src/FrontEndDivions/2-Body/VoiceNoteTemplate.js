import './_Body.css'


const VoiceNoteTemplate=(props)=>{
    return<>
    <div className=" messageTemplateContainer ">    
        <div className='fixingSizeOrientationRight' >
                <div className={props.serverSide? ' VoiceNoteOrientationLeft ' :' VoiceNoteOrientationRight '} >
                <audio src={props.Audio.blobURL} controls="controls" />
                </div>
        </div>
    </div>
    </>
    }
    
    export default  VoiceNoteTemplate;
