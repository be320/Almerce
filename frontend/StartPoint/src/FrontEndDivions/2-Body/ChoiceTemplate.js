import './_Body.css'
import Chip from "@material-ui/core/Chip";

const ChoiceTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                <div className="messageOrientationRight d-flex justify-content-center flex-wrap" style={{backgroundColor : "rgb(110, 72, 170)"}} >
                    {props.choices.map(item => {
                        return <Chip className="m-1 p-1" label={item} clickable variant="outlined"  style={{backgroundColor : "white"}} onClick={props.handleChoiceClick}/>
                    }
                    )}
                </div>
            </div>
        </div>
    </>
}

export default ChoiceTemplate;
