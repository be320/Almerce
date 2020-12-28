import './_Footer.css'
import React, { useEffect, useState } from "react"
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

const Emoji = (props, state) => {

  const [showEmojis, setshowEmojis] = useState(false);

  const addEmoji = (event) => {
    props.setTextField(props.TextField + event.native);
  };

  const toggle = () => {
    setshowEmojis(!showEmojis);
  };

  return <>


    {showEmojis && (
      <div class="col ">
        <Picker
          onSelect={addEmoji}
          emojiTooltip={true}
          title="weChat" />
      </div>)}

    <div class="col ">
      <p onClick={toggle}>
        {String.fromCodePoint(0x1f60a)}
      </p>
    </div>

  </>
}
export default Emoji;