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
    return (
      <div id="GraphView">
        {this.props.layers.map((d, i) => {
          return (
            <Layer
            key = {'layer'+i}
            layer={d}
            />
          );
        })}
      </div>
    );
  }
}
