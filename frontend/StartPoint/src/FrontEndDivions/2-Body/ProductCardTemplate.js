import './_Body.css'
import A from '../Dummy/Images/AA.png'
// import T from '../Dummy/Images/T.jpg' 

const ProductCardTemplate = (props) => {
  return <>

    <div className=" messageTemplateContainer  ">
      <img src={A} className=' imageMessageTemplateLeft rounded-circle' alt="ImageMessageTemplate" />
      <div className=' messageOrientationLeft ' >بص كدا</div>
    </div>

    <div className='  productCardContainer'>

      {props.cards.map(item => {
        return <>
          <a href={item.ProductUrl} target="_top" className='productCardItemContainer'>
            <img className="productCardImage" src={item.imgSrc} alt="Card cap" />
            <h6>{item.productHeader}</h6>
            {(item.productParagraph.length > 75) && (
            <p className="productParagaraph" style={{direction: "rtl", }}>{item.productParagraph.substring(0, 75)+"..."}</p>)}
            {(item.productParagraph.length <= 75) &&
              (<p>{item.productParagraph}</p>)}
            <p style={{ dispaly: "none" }}>{item.productId}</p>
          </a>
        </>
      }
      )}
    </div>

  </>
}

export default ProductCardTemplate;


