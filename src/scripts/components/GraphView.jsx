import React from "react";
import { connect } from 'react-redux';

export default class GraphView extends React.Component {
  draw() {
    let allCode = this.props.graph
    while(allCode.search('add')!=-1){
      
    }
  }
  render() {
    return (
      <div id="GraphView" >
        <h1>Have a nice day</h1>
        {this.props.graph}
      </div>
    );
  }
}
// const GraphView = ({graph}) =>  (
//       <div id="GraphView" >
//         <h1>Let's Draw</h1>
//         {graph}
//       </div>
//     )
// export default GraphView