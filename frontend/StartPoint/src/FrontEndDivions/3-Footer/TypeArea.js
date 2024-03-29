import './_Footer.css'
import TextareaAutosize from 'react-textarea-autosize';

const TypeArea = (props, state) => {

  return <>
 <TextareaAutosize minRows="1" maxRows="3" cols="28"  onHeightChange={props.onHeightChange} 
    ref={props.inputRef} className="-webkit-appearance:none rounded m-1 myTextArea"  
    maxlength ="250"  wrap="soft" type="text" 
    value={props.TextField} onChange={props.handleTextChange} />
  </>
}
export default TypeArea;
