"use babel";

import React from "react";
import brace from "brace";
import AceEditor from "react-ace";
import "brace/mode/python";
import "brace/theme/monokai";
import {changeCode} from '../actions';

 const CodeView = ({code, onChangeCode}) => (
      <AceEditor
        mode="python"
        theme="monokai"
        onChange={(value) => onChangeCode(value)}
        name="CodeView"
        value={code}
        fontSize={15}
        editorProps={{ $blockScrolling: true }}
      />
    );
export default CodeView;