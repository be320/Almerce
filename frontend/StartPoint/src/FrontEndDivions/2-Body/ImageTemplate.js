import './_Body.css'

const ImageTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                <div className='w-100 messageOrientationRight '>
                    <img src={props.image} style={{display: "block", width: "100%", height: "auto"}} alt="uploaded"/>
                </div>
            </div>
        </div>
    </>
}

export default ImageTemplate;
