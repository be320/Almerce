import React from "react";
import { Editor } from "@tinymce/tinymce-react";

function Emoji() {

  return (
    <Editor
      apiKey="no-api-key"
      init={{
        selector: 'textarea',
        plugins: "emoticons",
        toolbar: "emoticons",
        toolbar_location: "bottom",
        menubar: false,
        statusbar: false,
      }}
    />
  );
}

export default Emoji;