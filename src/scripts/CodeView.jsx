"use babel";

import React from "react";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/python";
import "brace/theme/monokai";

export default class CodeView extends React.Component {
  constructor(props) {
    super(props);
  }
  onChange(newValue, event) {
    console.log(newValue)
    console.log(event)
  }
  render() {
    return (
      <AceEditor
        mode="python"
        theme="monokai"
        onChange={this.onChange}
        name="CodeView"
        value={`from keras.models import Sequential
from keras.layers import Dense, Activation
model = Sequential([
            Dense(32, input_shape=(784,)),
            Activation('relu'),
            Dense(10),
            Activation('softmax'),
        ])`}
        editorProps={{ $blockScrolling: true }}
      />
    );
  }
}
