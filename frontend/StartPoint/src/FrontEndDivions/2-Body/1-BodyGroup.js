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

const BodyContainer=(props)=>{
 
 const messagesEndRef = useRef(null)
 
 useEffect(() => {
 messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
 }, [props.bodyContainer]);

const handleChoiceClick =(event)=>
 {

  props.actions.clientSideActions.sendOneWayTemplate(
 
    {
      elementType: 'MessageTemplate',
      serverSide: false,
      message: {TextField :event.target.innerText},
      index:props.refIndex.current.index+=1
      
    }
  );
 }

 function changeRating (event , ratingVal){

  props.actions.clientSideActions.sendchangeRating(
    {
      elementType: 'StarRatingTemplate',
      serverSide: false,
      rating: ratingVal,
      index:props.refIndex.current.index+=1

    }
  );
  event.currentTarget.parentNode.parentNode.parentNode.parentNode.style.display = "none";
  
 }
return<>
<div className="body" style={{height: `calc(100vh - ${
  props.footerSize.height + (props.selectedImages.length===0
    ?0
    :150)
  }px)`}}>
  
<MessageTemplate
    serverSide={true}
    message="مساء الخير يا فندم اخبارك ايه اتشرف بالاسم" />
{props.bodyContainer.map(item => { 
 if (item.elementType ==='MessageTemplate'){
 console.log(item);
 return <MessageTemplate
 serverSide={item.serverSide}
 message={item.message.TextField}
 />}
 else if (item.elementType ==='AudioTemplate'){
 console.log('Audio Received');
 return <VoiceNoteTemplate
 Audio={item.audio}/>
 }
 else if (item.elementType ==='ImageTemplate'){
 console.log('Image Received');
 return  item.imageList.map(subitem =>
 <ImageTemplate
  image={subitem.imageURL}/>)
 }
 else if (item.elementType ==='ChoiceTemplate'){
  console.log('Choices Received');
  return<>
   <MessageTemplate serverSide={true} message={item.message.TextField}/>
   <ChoiceTemplate serverSide={false} choices={item.choices} handleChoiceClick={handleChoiceClick}/>
  </>}
   else if (item.elementType ==='ProductCardTemplate'){
    console.log('Product card Received');
    return<>
     <ProductCardTemplate cards={item.cards}/>
    </>}
     else if (item.elementType ==='StarRatingTemplate'){
      console.log('Star Rating Received');
      console.log(item);
      return<>
       <StarRatingTemplate val={(item.rating)?item.rating:0} serverSide={item.serverSide} changeRating={changeRating} />
      </>}
 else 
 {return<>
 </>} 
})}
 <div ref={messagesEndRef} />
</div>
 
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
 };
 }
 export default connect(mapStateToProps,mapDispatchToProps)(BodyContainer);
