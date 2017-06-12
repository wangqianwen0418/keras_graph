import React from "react";
import ReactDOM from "react-dom";
import CodeView from "./CodeView";
import GraphView from "./GraphView";

class Main extends React.Component {
  render() {
    return (
      <div>
        <CodeView />
        <GraphView />
      </div>
    );
  }
}

window.onload = function() {
  ReactDOM.render(<Main/>, document.getElementById("app"));
};
