import './_Body.css'
import AA from '../Dummy/Images/AA.jpg'
import Loader from 'react-loader-spinner';

const LoaderTemplate = (props) => {
    return <>
        <div className=" messageTemplateContainer ">
            <div className='fixingSizeOrientationRight' >
                <img src={AA} className="imageMessageTemplateLeft rounded-circle"  alt="ImageMessageTemplate" />
                <div className= ' messageOrientationLeft ' style ={{backgroundColor : "rgb(110, 72, 170)", color:"white"}} >
                <Loader type="ThreeDots" color="#ffffff" height={25} width={25} /></div>
            </div>
        </div>
    </>
}

export default LoaderTemplate;
