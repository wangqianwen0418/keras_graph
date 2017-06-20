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
      y: 0
    };
  }
  onMouseDown(e) {
    // const ref = ReactDOM.findDOMNode(this.handle);
    // const body = document.body;
    // const box = ref.getBoundingClientRect();
    // console.info(e.pageX - (box.left + body.scrollLeft - body.clientLeft))
    this.setState({
      relX: e.pageX,
      relY: e.pageY
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
          padding:'5px',
          textAlign:'center',
          color: "#fff",
          transform: `translate(${this.state.x}px, ${this.state.y}px)`,
          borderRadius:'4px'
        }}
        draggable='true'
        onMouseDown={this.onMouseDown}
        /*onMouseMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}*/
        ref={e => {
          this.handle = e;
        }}
      >
        {layer.name}
      </div>
    );
  }
}
