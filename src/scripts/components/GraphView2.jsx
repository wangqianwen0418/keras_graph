import React, { Component } from "react";
import { getLayerColor } from "../assets/layers";
import draggable from "../../ulti/draggable";
import Layer from "./Layer";

/*
@params: layers|array, layers[i].name|string, layers[i].pars|string


*/

export default class GraphView extends Component {
  constructor(props) {
    super(props);
    this.reOrder = this.reOrder.bind(this)
    let {layers}=this.props
  }
  reOrder(from, to) {
    this.props.reOrder(from, to)
    this.setState({ update:1})
  }
  render() {
    // console.info('graph render')
    let { layers } = this.props
    // console.info(layers)
    return (
      <div id="GraphView">
        {layers.map((d, i) => {
          //console.info(d)
          return (
            <Layer
              key={'layer' + i}
              reOrder={this.reOrder}
              layer={d}
              index={i}
            />
          );
        })}
      </div>
    );
  }
}
