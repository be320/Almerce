
import AlmerceProfile from './AlmerceProfile'
import Maximize from './Maximize'
import Minimize from './Minimize'
import './_Header.css'
const HeaderContainer = (props, state) => {
    return <>
    <div>
        <div class=" almerceheader">
                <AlmerceProfile />
                <Maximize />  
                <Minimize />
        </div>
        </div>
    </>

}
export default HeaderContainer;

