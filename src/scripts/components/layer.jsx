import React, { Component } from "react";
import { getLayerColor } from "../assets/layers";
import ReactDOM from "react-dom";

export default class Layer extends Component {
  constructor(props) {
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.onDrag = this.onDrag.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onClick = this.onClick.bind(this)
    this.state = {
      x: 0,
      y: 0,
      z: -1,
      from: this.props.layer.index,
      layer: this.props.layer,
      height:30,
      width:200,
      fold: true
    };
  }
  onDragStart(e) {
    this.setState({
      relX: e.pageX,
      relY: e.pageY,
      from: this.props.index,
      z:1
    });
    document.addEventListener("mousemove", this.onDrag);
    document.addEventListener("mouseup", this.onDragEnd);
    e.preventDefault();
  }
  onDragEnd(e) {
    const { from, to } = this.state
    this.reOrder(from, to)
    document.removeEventListener("mousemove", this.onDrag);
    document.removeEventListener("mouseup", this.onDragEnd);
    e.preventDefault();
    this.setState({
      x: 0,
      y: 0,
      z: -1
    })
  }
  reOrder(from, to) {
    this.props.reOrder(from, to)
  }
  onDrag(e) {
    let { from, relX, relY } = this.state
    let to = Math.round((e.pageY - relY) / 35) + from
    this.setState({
      x: e.pageX - relX,
      y: e.pageY - relY,
      to
    });
    e.preventDefault();
  }
  onClick(){
    let {height, fold} = this.state
    height = fold?3*height:height/3
    fold =!fold
    this.setState({height, fold})
  }
  render() {
    const { layer } = this.props
    const { x, y, height, width, fold, z } = this.state
    console.info(z)
    let detail = <p>{fold?'':layer.pars}</p>
    return (
      <div
        style={{
          height: `${height}px`,
          width: `${width}px`,
          backgroundColor: getLayerColor(layer.name),
          zIndex: `${z}`,
          margin: "5px 40px",
          padding: '5px',
          textAlign: 'center',
          color: "#333",
          fontSize: '20px',
          fontFamily:'sans-serif',
          transform: `translate(${x}px, ${y}px)`,
          borderRadius: '4px'
        }}
        draggable='true'
        className={this.props.index}
        onDragStart={this.onDragStart}
        onClick={this.onClick}
      /*onDrag={this.onDrag}
      onDragEnd={this.onDragEnd}*/
      /*ref={e => {
        this.handle = e;
      }}*/
      >
        {layer.name}
        {detail}
      </div>
    );
  }
}
