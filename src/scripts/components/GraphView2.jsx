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
    this.state={layers}
  }
  reOrder(from, to) {
    this.props.reOrder(from, to)
    // if (from < to) {
    //   layers.forEach((layer, i) => {
    //     if (from <= i < to)
    //       layer = layers[i + 1]
    //   })
    // } else if (from > to) {
    //   layers.forEach((layer, i) => {
    //     if (to < i <= from)
    //       layer = layers[i - 1]
    //   })
    // }
    // layers[to] = layers[from]
    // console.info(layers)
    let {layers} = this.state
    let len = layers.length
    to = Math.max(0, to>len?len-1:to)
    let temp = layers[to]
    layers[to] = layers[from]
    layers[from] = temp
    this.setState({ layers })
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
