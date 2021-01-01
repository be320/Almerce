import './_Body.css'
import { connect } from "react-redux";
import MessageTemplate from '../2-Body/MessageTemplate'

const BodyContainer=(props)=>{
return<>
<div className="body">
{
props.bodyContainer.map(item => { 
  if (item.elementType ==='MessageTemplate'){
    console.log('dddd');
    return <MessageTemplate
    serverSide={item.serverSide}
    message={item.message.TextField}
    />
  }
})
}
</div>
</>
}

//this function map the component with the state stored in the store
//so this will be passed to this component via props as if the store 
//is the parent of this component
const mapStateToProps =(state)=>{
    return {
        bodyContainer: state.TypeAreaReducer
    };
  }
export default connect(mapStateToProps)(BodyContainer);

