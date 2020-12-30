import './_Body.css'
import MessageTemplate from './MessageTemplate'
import ProductCardTemplate from './ProductCardTemplate'
import ReactStars from "react-rating-stars-component";
import StarRatingTemplate from './StarRatingTemplate'




const BodyContainer=(props,state)=>{


return<>
<div className="body">
<MessageTemplate/>
<ProductCardTemplate/>
<MessageTemplate/>
<ReactStars {...StarRatingTemplate}/>
</div>

</>
}

export default  BodyContainer;