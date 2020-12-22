import './_Body.css'
import A from '../Dummy/Images/A.jpg' 
import B from '../Dummy/Images/B.jpg' 

const MessageTemplate=(props,state)=>{
    return<>
    
    <div className=" messageTemplateContainer ">

        <div className={false? '' :'fixingSizeOrientationRight'} >
                <img src={A}className={true? ' imageMessageTemplateLeft rounded-circle' :' imageMessageTemplateRight rounded-circle'}alt="ImageMessageTemplate"/> 
                <div className={true? ' messageOrientationLeft ' :' messageOrientationRight '} >Hi, my name is Almerce i am very glag to meet you:), what is your name</div>
        </div>
        <div className={false? '' :'fixingSizeOrientationRight'} >
                <img src={B}className={false? ' imageMessageTemplateLeft rounded-circle' :' imageMessageTemplateRight rounded-circle'}alt="ImageMessageTemplate"/> 
                <div className={false? ' messageOrientationLeft ' :' messageOrientationRight '} >Hi, my name kirolos :), i am glad to see you Almerce </div>
                
        </div>
        <div className={false? '' :'fixingSizeOrientationRight'} >
                <img src={A}className={true? ' imageMessageTemplateLeft rounded-circle' :' imageMessageTemplateRight rounded-circle'}alt="ImageMessageTemplate"/> 
                <div className={true? ' messageOrientationLeft ' :' messageOrientationRight '} >Hi, my name is Almerce i am very glag to meet you:), what is your name</div>
        </div>
        <div className={false? '' :'fixingSizeOrientationRight'}>
                <img src={B}className={false? ' imageMessageTemplateLeft rounded-circle' :' imageMessageTemplateRight rounded-circle'}alt="ImageMessageTemplate"/> 
                <div className={false? ' messageOrientationLeft ' :' messageOrientationRight '} >Hi, my name kirolos :), i am glad to see you Almerce </div>
        </div>
        <div className={false? '' :'fixingSizeOrientationRight'} >
                <img src={B}className={false? ' imageMessageTemplateLeft rounded-circle' :' imageMessageTemplateRight rounded-circle'}alt="ImageMessageTemplate"/> 
                <div className={false? ' messageOrientationLeft ' :' messageOrientationRight '} >Hi, my name kirolos :), i am glad to see you Almerce </div>
        </div>



    </div>
    </>
    }
    
    export default  MessageTemplate;
