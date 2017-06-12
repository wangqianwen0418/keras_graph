"use babel";

import React from "react";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/javascript";
import "brace/theme/monokai";

export default class CodeView extends React.Component {
  constructor(props) {
    super(props);
  }
  onChange(newValue) {
    console.log("change", newValue);
  }
  render() {
    return (
      <AceEditor
        mode="javascript"
        theme="monokai"
        onChange={this.onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}
