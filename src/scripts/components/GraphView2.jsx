import React, { Component } from "react";
import { getLayerColor } from "../../assets/layers";
import draggable from "../../ulti/draggable";
import Layer from "./Layer";
import Input from './Input';
import Output from './Output';

/*
@params: layers|array, layers[i].name|string, layers[i].pars|string


*/

export default class GraphView extends Component {
  constructor(props) {
    super(props);
    this.reOrder = this.reOrder.bind(this)
    let { layers } = this.props
  }
  reOrder(from, to) {
    this.props.reOrder(from, to)
    this.setState({ update: 1 })
  }
  render() {
    // console.info('graph render')
    let { layers } = this.props
    // console.info(layers)
    return (
      <div id="GraphView" ref={e => this.graphView}>
        <div
          id='header'
          style={{
            fontSize: '20px',
            textAlign: 'center',
            backgroundColor: 'white',
            color: '#00838F',
            padding: '5px',
            boxShadow: '2px 2px 2px #666',
            width: this.graphView ? `${this.graphView.clientWidth}px` : '50vw'
          }}
        >
          {this.props.title}
        </div>
        <Input name={'Input'}/>
        <div id='layers' style={{textAlign:'center'}}>
          {layers.map((d, i) => {
            //console.info(d)
            return (
              <Layer
                key={'layer' + i}
                reOrder={this.reOrder}
                layer={d}
                index={layers.indexOf(d)}
              />
            );
          })}
        </div>
        <Output name={'Output'}/>
      </div>
    );
  }
}
