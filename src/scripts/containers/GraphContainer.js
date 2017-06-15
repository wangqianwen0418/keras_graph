import { connect } from "react-redux";
import { changeGraph } from "../actions";
import GraphView from "../components/GraphView";

const mapStateToProps = state => {
  return {
    layers: getLayers(state.content)
  };
};

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTodoClick: (code) => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }
const getLayers = content => {
  let addReg = /model\.add\(([^)]+)\)\)/g;
  let seqReg = /Sequential\(\[(^}\]+)\]\)/;
  let arr;
  let result = [];
  if((arr = seqReg.exec(content))!== null){
    let layers = arr[0]
  } 

  while ((arr = addReg.exec(content)) !== null) {
    // result.push(content[arr.index]);
    let layer = arr[0].split('add')[1]
    let name = layer.split('(')[1]
    let pars = layer.split('(')[2]
    result.push({name, pars})
  }

  return result

};

const GraphContainer = connect(mapStateToProps)(GraphView);

export default GraphContainer;
