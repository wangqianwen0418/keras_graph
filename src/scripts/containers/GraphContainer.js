import { connect } from "react-redux";
import { changeGraph } from "../actions";
import GraphView from "../components/GraphView";

const mapStateToProps = (state) => {
  return {
    graph: state.content||''
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (code) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

const GraphContainer = connect(mapStateToProps)(GraphView);

export default GraphContainer;
