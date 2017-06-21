import { connect } from "react-redux";
import { moveLayers } from "../actions";
import GraphView from "../components/GraphView2";


const mapStateToProps = state => {
  return {
    // layers: getLayers(state.content)
    layers: state.layers
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reOrder: (from, to) => {
      dispatch(moveLayers(from, to))
    }
  }
}



const GraphContainer = connect(mapStateToProps, mapDispatchToProps)(GraphView);

export default GraphContainer;
