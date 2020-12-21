import './_Body.css'
import A from '../Dummy/Images/A.jpg' 
import B from '../Dummy/Images/B.jpg' 

const MessageTemplate=(props,state)=>{
    return<>
    
    <div className=" container messageTemplateContainer ">

    <div className= {true? 'row align-items-center ': 'row align-items-center offset-md-5' } >
                <img src={A}className="imageMessageTemplate rounded-circle"alt="ImageMessageTemplate"/> 
                <div className={true? ' messageOrientationLeft ' :' messageOrientationRight '} >Hi, my name is Almerce :)
        </div>
        </div>

        <div className= {false? 'row align-items-center ': 'row align-items-center offset-md-4' } >
                <div className={false? ' messageOrientationLeft ' :' messageOrientationRight '} >Hi Almerce, my name is kirolos :) Test</div>
                <img src={B} className="imageMessageTemplate rounded-circle"alt="ImageMessageTemplate"/> 

        </div>
    </div>
    </>
    }
    
    export default  MessageTemplate;
