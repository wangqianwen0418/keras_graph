import React from "react";
import { connect } from 'react-redux';

// export default class GraphView extends React.Component {
//   render() {
//     return (
//       <div id="GraphView" >
//         <h1>Have a nice day</h1>
//         {this.props.types}
//       </div>
//     );
//   }
// }
const GraphView = ({graph}) =>  (
      <div id="GraphView" >
        <h1>Have a nice day</h1>
        {graph}
      </div>
    )
export default GraphView