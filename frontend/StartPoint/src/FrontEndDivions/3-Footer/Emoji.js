import './_Footer.css'
import React, {  useState } from "react"
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
      <div>
        <Picker
          onSelect={addEmoji}
          emojiTooltip={true}
          title="weChat" />
      </div>)}

      <div  onClick={toggle}>
        {String.fromCodePoint(0x1f60a)}
      </div>

  </>
}
export default Emoji;