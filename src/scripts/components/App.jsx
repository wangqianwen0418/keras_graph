import React from "react";
import CodeContainer from "../containers/CodeContainer";
import GraphContainer from "../containers/GraphContainer";
import '../../css/style';



export default class App extends React.Component {
  render() {
    return (
      <div
      className = 'App'>
        <CodeContainer />
        <GraphContainer />
      </div>
    );
  }
}


