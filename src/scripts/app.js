import React from "react";
import ReactDOM from "react-dom";
import CodeView from "./CodeView";
import GraphView from "./GraphView";
import '../css/style';

class Main extends React.Component {
  render() {
    return (
      <div className = 'App'>
        <CodeView />
        <GraphView />
      </div>
    );
  }
}

window.onload = function() {
  ReactDOM.render(<Main/>, document.getElementById("app"));
};
