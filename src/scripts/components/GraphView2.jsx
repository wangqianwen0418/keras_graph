import React, { Component } from "react";
import { getLayerColor } from "../assets/layers";
import draggable from "../../ulti/draggable";
import Layer from "./layer";

/*
@params: layers|array, layers[i].name|string, layers[i].pars|string


*/

export default class GraphView extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let layers = this.props.layers
    let length = layers.length
    let order = layers.map(layer=>layer.index)
    return (
      <div id="GraphView">
        {[...Array(length).keys()].map(i => {
          return (
            <Layer
            key = {'layer'+i}
            order = {order}
            layer={layers[i]}
            />
          );
        })}
      </div>
    );
  }
}
