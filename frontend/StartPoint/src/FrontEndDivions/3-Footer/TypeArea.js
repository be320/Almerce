import './_Footer.css'
import TextareaAutosize from 'react-textarea-autosize';

const TypeArea = (props, state) => {

  return <>
 <TextareaAutosize className="-webkit-appearance:none rounded my-1 myTextArea w-100" minRows="1" maxRows="2"  
    ref={props.inputRef} onHeightChange={props.onHeightChange} 
    maxLength ="250"  wrap="soft" type="text" 
    value={props.TextField} 
    onChange={props.handleTextChange}
     />
  </>
}
export default TypeArea;
