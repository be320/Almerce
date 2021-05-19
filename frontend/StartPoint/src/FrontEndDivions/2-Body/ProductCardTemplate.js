import './_Body.css'
import A from '../Dummy/Images/AA.jpg'
// import T from '../Dummy/Images/T.jpg' 

function extractContent(s) {
  var span = document.createElement('span');
  span.innerHTML = s;
  return span.textContent || span.innerText;
}

const ProductCardTemplate = (props) => {
  return <>

    <div className=" messageTemplateContainer  ">
      <img src={A} className=' imageMessageTemplateLeft rounded-circle' alt="ImageMessageTemplate" />
      <div className=' messageOrientationLeft ' >بص كدا</div>
    </div>

    <div className='  productCardContainer'>

      {props.cards.map(item => {
        var description = extractContent(item.productParagraph)
        return <>
          <a href={item.ProductUrl} target="_top" className='productCardItemContainer'>
            <img className="productCardImage" src={item.imgSrc} alt="Card cap" />
            <h6>{item.productHeader}</h6>
            {(description.length > 75) && (
            <p className="productParagaraph" style={{direction: "rtl", }}>{description.substring(0, 75)+"..."}</p>)}
            {(description.length <= 75) &&
              (<p>{description}</p>)}
            <p style={{ dispaly: "none" }}>{item.productId}</p>
          </a>
        </>
      }
      )}
    </div>

  </>
}

export default ProductCardTemplate;


