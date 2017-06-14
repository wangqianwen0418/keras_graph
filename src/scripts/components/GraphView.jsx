import React from "react";
import { connect } from 'react-redux';
import ReactEcharts from 'echarts-for-react';
export default class GraphView extends React.Component {
  getOption() {
    let graphics = this.props.graph.map(d => {
      return {
        type: 'rect',
        // name: /\(([^)]+)\)/.exec(d)[0]
      }
    })
    let option = {
      'graphic': graphics
    }
    return option
    
  }
  render() {
    return (
      <div id="GraphView" >
        <h1>Have a nice day</h1>
        <ReactEcharts
        option={this.getOption()}
        />
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