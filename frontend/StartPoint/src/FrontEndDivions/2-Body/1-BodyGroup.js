import './_Body.css'
import { connect } from "react-redux";

const BodyContainer=(props)=>{

return<>
<div className="body">
{props.bodyContainer}
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



