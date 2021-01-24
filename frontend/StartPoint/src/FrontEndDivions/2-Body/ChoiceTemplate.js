import './_Body.css'

const ChoiceTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                <div className={props.serverSide ? ' messageOrientationLeft ' : ' messageOrientationRight '} style ={props.serverSide ? {backgroundColor : "#E5CCFF", color:"green"}:{}} >
                   <button>
                   {props.message}
                    </button>
                </div>
            </div>
        </div>
    </>
}

export default ChoiceTemplate;
