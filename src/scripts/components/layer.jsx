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
      x: 0,
      y: 0,
      from: this.props.layer.index,
      layer: this.props.layer
    };
  }
  onMouseDown(e) {
    this.setState({
      relX: e.pageX,
      relY: e.pageY,
      from: this.props.index
    });
    document.addEventListener("mousemove", this.onMouseMove);
    document.addEventListener("mouseup", this.onMouseUp);
    e.preventDefault();
  }
  onMouseUp(e) {
    const { from, to } = this.state
    this.reOrder(from, to)
    document.removeEventListener("mousemove", this.onMouseMove);
    document.removeEventListener("mouseup", this.onMouseUp);
    e.preventDefault();
    this.setState({
      x: 0,
      y: 0,
    })
  }
  reOrder(from, to) {
    this.props.reOrder(from, to)
  }
  onMouseMove(e) {
    let { from, relX, relY } = this.state
    let to = Math.round((e.pageY - relY) / 35) + from
    this.setState({
      x: e.pageX - relX,
      y: e.pageY - relY,
      to
    });
    e.preventDefault();
  }
  render() {
    const { layer } = this.props
    return (
      <div
        style={{
          height: "30px",
          width: "150px",
          backgroundColor: getLayerColor(layer.name),
          margin: "5px",
          padding: '5px',
          textAlign: 'center',
          color: "#fff",
          transform: `translate(${this.state.x}px, ${this.state.y}px)`,
          borderRadius: '4px'
        }}
        draggable='true'
        className={this.props.index}
        onMouseDown={this.onMouseDown}
      /*onMouseMove={this.onMouseMove}
      onMouseUp={this.onMouseUp}*/
      /*ref={e => {
        this.handle = e;
      }}*/
      >
        {layer.name}
      </div>
    );
  }
}
