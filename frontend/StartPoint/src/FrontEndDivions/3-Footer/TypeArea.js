import './_Footer.css'
import TextareaAutosize from 'react-textarea-autosize';

const TypeArea = (props, state) => {

  return <>
 <TextareaAutosize minRows="1" maxRows="2" cols="27"  onHeightChange={props.onHeightChange} 
    ref={props.inputRef} className="-webkit-appearance:none rounded m-1 myTextArea"  
    maxLength ="250"  wrap="soft" type="text" 
    value={props.TextField} onChange={props.handleTextChange} />
  </>
}
export default TypeArea;
