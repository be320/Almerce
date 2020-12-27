import './_Footer.css'

const TypeArea = (props, state) => {
  return <>
    <div class="col align-self-center">
      <textarea type="text" value={props.TextField} onChange={props.handleInputChange} />
    </div>
  </>
}
export default TypeArea;