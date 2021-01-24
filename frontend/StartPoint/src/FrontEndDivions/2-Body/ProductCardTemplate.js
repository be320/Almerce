import './_Body.css'
 import A from '../Dummy/Images/A.jpg' 
// import T from '../Dummy/Images/T.jpg' 

const ProductCardTemplate=(props)=>{
    return<>
   
<div className=" messageTemplateContainer  ">
<img src={A}className=' imageMessageTemplateLeft rounded-circle'alt="ImageMessageTemplate"/> 
<div className=' messageOrientationLeft ' >Nice, Check what may suit you below...</div>
</div>

<div className='  productCardContainer'>

{props.cards.map(item => {
        return<> 
        <a href={item.ProductUrl} className='productCardItemContainer'>
        <img className="productCardImage" src={item.imgSrc} alt="Card cap"/>
          <h5>{item.productHeader}</h5>
          <p>{item.productParagraph}</p>
          <p style={{dispaly:"none"}}>{item.productId}</p>
        </a>
        </>
    }
    )}


{/* <div className='  productCardItemContainer'>
  <img className="productCardImage" src={T} alt="Card cap"/>
    <h5>Tower of hanoi</h5>
    <p>Lorem Ipsum is simply dumm indus</p>
    <a href="https://www.google.com/" className="btn btn-success col-md-12 text-center ">Toy Link</a>
</div>

<div className='  productCardItemContainer'>
  <img className="productCardImage" src={T} alt="Card cap"/>
    <h5 >Tower of hanoi</h5>
    <p>Lorem Ipsum is simply dumm indus</p>
    <a href="https://www.google.com/" className="btn btn-success col-md-12 text-center ">Toy Link</a>
</div>

<div className='  productCardItemContainer'>
  <img className="productCardImage" src={T} alt="Card cap"/>
    <h5>Tower of hanoi</h5>
    <p>Lorem Ipsum is simply dumm indus</p>
    <a href="https://www.google.com/" className="btn btn-success col-md-12 text-center  ">Toy Link</a>
</div>

<div className='  productCardItemContainer'>
  <img className="productCardImage" src={T} alt="Card cap"/>
    <h5>Tower of hanoi</h5>
    <p>Lorem Ipsum is simply dumm indus</p>
    <a href="https://www.google.com/" className="btn btn-success col-md-12 text-center ">Toy Link</a>
</div> */}

</div>

    </>
}
    
export default  ProductCardTemplate;


