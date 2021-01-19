import './_Footer.css'
const TypeArea = (props, state) => {

  return <>
    <textarea ref={props.inputRef} className="-webkit-appearance:none rounded my-2 myTextArea"  maxlength ="250" rows="2" wrap="soft" cols="20"
  type="text" value={props.TextField} onChange={props.handleTextChange} />
  </>
}
export default TypeArea;
