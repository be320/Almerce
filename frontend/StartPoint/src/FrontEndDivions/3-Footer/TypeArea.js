import './_Footer.css'
import React, { useEffect, useState } from "react"


const TypeArea = (props, state) => {

  return <>
    <div class="col align-self-center">
      <textarea type="text" value={props.TextField} onChange={props.handleInputChange} />
    </div>
  </>
}
export default TypeArea;