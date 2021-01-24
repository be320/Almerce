

import './_Body.css'
import { connect } from "react-redux";
import MessageTemplate from '../2-Body/MessageTemplate'
import VoiceNoteTemplate from '../2-Body/VoiceNoteTemplate';
import ImageTemplate from '../2-Body/ImageTemplate';
import { useEffect, useRef } from 'react'
 
const BodyContainer=(props)=>{
 
 const messagesEndRef = useRef(null)
 
 useEffect(() => {
 messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
 }, [props.bodyContainer]);
 
return<>
<div className="body" style={{height: `calc(100vh - ${props.footerSize.height}px)`}}>
  
<MessageTemplate
    serverSide={true}
    message="مساء الخير يا فندم اخبارك ايه اتشرف بالاسم" />
{props.bodyContainer.map(item => { 
 
 if (item.elementType ==='MessageTemplate'){
 console.log('Message Received');
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
 return <ImageTemplate
 image={item.image.selectedImage}/>
 }
 else 
 {return<>
 </>} 
})}
 <div ref={messagesEndRef} />
</div>
 
</>
}
 
//this function map the component with the state stored in the store
//so this will be passed to this component via props as if the store 
//is the parent of this component
const mapStateToProps =(state)=>{
 return {
 bodyContainer: state[2],
 footerSize: state[0]
 };
 }
 
export default connect(mapStateToProps)(BodyContainer);
