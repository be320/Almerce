
import AlmerceProfile from './AlmerceProfile'
import Maximize from './Maximize'
import Minimize from './Minimize'
import './_Header.css'
const HeaderContainer = (props, state) => {
    return <>
    <div class="container">
        <div class="row header justify-content-md-center align-items-center">
                <AlmerceProfile />
            <div class="col">
                <Maximize />
            </div>
            <div class="col ">
                <Minimize />
            </div>
        </div>
        </div>
    </>

}
export default HeaderContainer;

