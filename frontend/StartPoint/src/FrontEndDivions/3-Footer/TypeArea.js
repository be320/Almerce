import './_Footer.css'


const TypeArea = (props, state) => {

  return <>
      <textarea className="rounded myTextArea my-2"  rows="2" wrap="soft" cols="21"
       type="text" value={props.TextField} onChange={props.handleInputChange} />
  </>
}
export default TypeArea;
