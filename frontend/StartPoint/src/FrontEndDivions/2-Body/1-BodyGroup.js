import './_Body.css'
import { connect } from "react-redux";
import MessageTemplate from '../2-Body/MessageTemplate'
import VoiceNoteTemplate from '../2-Body/VoiceNoteTemplate';
import ImageTemplate from '../2-Body/ImageTemplate';
import ChoiceTemplate from '../2-Body/ChoiceTemplate';
import ProductCardTemplate from '../2-Body/ProductCardTemplate';
import { useEffect, useRef } from 'react'
import * as ChatBotActions from '../4-Redux/Actions/ChatBotActions'
import { bindActionCreators } from "redux";
import StarRatingTemplate from './StarRatingTemplate';
import LoaderTemplate from './LoaderTemplate'
import PriceSliderTemplate from './PriceSliderTemplate';

const BodyContainer=(props)=>{
 
 const messagesEndRef = useRef(null)
 
 useEffect(() => {
  if (localStorage.getItem("index") === "-1") {
    var temp = parseInt(localStorage.getItem('index'), 10); 
    props.actions.clientSideActions.sendTemplate(
      {
        elementType: 'welcomeTemplate',
        serverSide: false,
        message:{TextField :"hi"},
        index:temp+1,
        choiceType:''

      }
    );
    localStorage.setItem('index',  JSON.stringify(temp+1))
  }
 messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
 }, [props.footerSize.height,props.bodyContainer]);

const handleChoiceClick =(event,choiceType)=>
 {
  var temp = parseInt(localStorage.getItem('index'), 10); 
  //reset index to 0 if user wants to restart sequence
  if (event.target.innerText=="نعم" & choiceType=="restart")
    {debugger
      props.actions.clientSideActions.sendOneWayTemplate(
    
      {
        elementType: 'MessageTemplate',
        serverSide: false,
        message: {TextField :event.target.innerText},
        index:temp+1,
        choiceType:choiceType
        
      }
    );
    localStorage.setItem('index',  JSON.stringify(0))}
  else{
    props.actions.clientSideActions.sendOneWayTemplate(
  
      {
        elementType: 'MessageTemplate',
        serverSide: false,
        message: {TextField :event.target.innerText},
        index:temp+1,
        choiceType:choiceType
        
      }
    );
    localStorage.setItem('index',  JSON.stringify(temp+1))}
 }
 function changeRating (event , ratingVal){
  var temp = parseInt(localStorage.getItem('index'), 10); 
  props.actions.clientSideActions.sendchangeRating(
    {
      elementType: 'StarRatingTemplate',
      serverSide: false,
      rating: ratingVal,
      index:temp+1,
      choiceType:''

    }
  );
  localStorage.setItem('index',  JSON.stringify(temp+1))
 }
  
  function priceRange (event , priceval){
    var temp = parseInt(localStorage.getItem('index'), 10); 
    props.actions.clientSideActions.sendpriceRange(
      {
        elementType: 'PriceSliderTemplate',
        serverSide: false,
        price: priceval,
        index:temp+1,
        choiceType:''
        
  
      }
    );
    localStorage.setItem('index',  JSON.stringify(temp+1))

 }
return<>
<div className="body" style={{height: `calc(100vh - ${
  props.footerSize.height + (props.selectedImages.length===0
    ?0
    :150)
  }px)`}}>
  

{props.bodyContainer.map(item => { 
 if (item.elementType ==='MessageTemplate'){
 return <MessageTemplate
 serverSide={item.serverSide}
 message={item.message.TextField}
 />}
 else if (item.elementType ==='AudioTemplate'){
 return <VoiceNoteTemplate
 Audio={item.audio}/>
 }
 else if (item.elementType ==='ImageTemplate'){
 return  item.imageList.map(subitem =>
 <ImageTemplate
  image={subitem.imageURL}/>)
 }
 else if (item.elementType ==='ChoiceTemplate'){
  return<>
   <MessageTemplate serverSide={true} message={item.message.TextField}/>
   <ChoiceTemplate serverSide={false} choices={item.choices} handleChoiceClick={handleChoiceClick} choiceType={item.choiceType}/>
  </>}
   else if (item.elementType ==='ProductCardTemplate'){
    return<>
     <ProductCardTemplate cards={item.cards}/>
     <StarRatingTemplate val={(item.rating)?item.rating:0} serverSide={item.serverSide} changeRating={changeRating} />
    </>}
     else if (item.elementType ==='PriceSliderTemplate'){
      return<>
       <MessageTemplate serverSide={true} message={item.message.TextField}/>
      <PriceSliderTemplate priceRange={priceRange} />
      </>
     }
     else
 return<>
 
 </>
 {return<>
 </>} 
})

}

{props.sendingState.isSending && <LoaderTemplate/>}
 <div ref={messagesEndRef} /> </div>

</>
}
const mapDispatchToProps = (dispatch) => {
  return {
    actions: {
      clientSideActions: bindActionCreators(ChatBotActions, dispatch),
    },
  };
}

//this function map the component with the state stored in the store
//so this will be passed to this component via props as if the store 
//is the parent of this component
const mapStateToProps =(state)=>{
 return {
 bodyContainer: state[2],
 footerSize: state[0],
 selectedImages: state[1],
 sendingState: state[3]
 };
 }
 export default connect(mapStateToProps,mapDispatchToProps)(BodyContainer);
