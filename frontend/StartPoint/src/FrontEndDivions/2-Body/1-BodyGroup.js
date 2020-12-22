import './_Body.css'
import MessageTemplate from './MessageTemplate'
import ProductCardTemplate from './ProductCardTemplate'

const BodyContainer=(props,state)=>{
return<>

<div className="body">
<MessageTemplate/>
<ProductCardTemplate/>
<MessageTemplate/>

</div>

</>
}

export default  BodyContainer;