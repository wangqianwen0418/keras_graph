import React, { Component } from "react";
import { getLayerColor } from "../assets/layers";
import ReactDOM from "react-dom";

export default class Layer extends Component {
  constructor(props) {
    super(props);
    this.onMouseDown = this.onMouseDown.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.onMouseUp = this.onMouseUp.bind(this);
    this.state = {
      relX: 0,
      relY: 0
    };
  }
  onMouseDown(e) {
    if (e.button !== 0) return;
    const ref = ReactDOM.findDOMNode(this.handle);
    const body = document.body;
    const box = ref.getBoundingClientRect();
    this.setState({
      relX: e.pageX - (box.left + body.scrollLeft - body.clientLeft),
      relY: e.pageY - (box.top + body.scrollTop - body.clientTop)
    });
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    e.preventDefault();
  }
  onMouseUp(e) {
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    e.preventDefault();
  }
  onMouseMove(e) {
    this.setState({
      x: e.pageX - this.state.relX,
      y: e.pageY - this.state.relY
    });
    e.preventDefault();
  }
  render() {
      console.info('a')
    const layer = this.props.layer;
    return (
      <div
        style={{
          height: "30px",
          width: "150px",
          backgroundColor: getLayerColor(layer.name),
          margin: "5px",
          color: "#000",
          position:'relative',
          left:'this.state.x',
          top:'this.state.y'
        }}
        onMouseDown={this.onMouseDown}
        ref={e => {
          this.handle = e;
        }}
      >
        {layer.name}
      </div>
    );
  }
}
