import { connect } from "react-redux";
import { changeGraph } from "../actions";
import GraphView from "../components/GraphView";

const mapStateToProps = state => {
  return {
    graph: getGraph(state.content)
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (code) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }
const getGraph = content => {
  let myRegex = /model\.add\(([^)]+)\)\)/g;
  let arr;
  let result = [];

  while ((arr = myRegex.exec(content)) !== null) {
    // result.push(content[arr.index]);
    result.push(arr[0])
  }

  return result

};

const GraphContainer = connect(mapStateToProps)(GraphView);

export default GraphContainer;
