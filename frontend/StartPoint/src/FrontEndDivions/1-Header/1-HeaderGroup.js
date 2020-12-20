
import AlmerceProfile from './AlmerceProfile'
import Maximize from './Maximize'
import Minimize from './Minimize'
import './_Header.css'
const ChatBotContainer =(props, state)=>{
    return<>
    <div class="container header border rounded-top">
        <div class="row align-items-center">
             <div class="col">
                 <AlmerceProfile/>
             </div>
    <div class="col-md-auto">
                 <Maximize/>
                 <Minimize/>
    </div>
        </div>
    </div>
    </>
        
    }
    export default ChatBotContainer;

   