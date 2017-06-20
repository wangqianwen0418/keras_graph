import React, {Component} from 'react';
import { getLayerColor } from "../assets/layers";

export default class layer extends Component {
    render(){
        const layer = this.props.layer
        return (<div
              key={"layer" + i}
              style={{ height: "30px", width: "150px", backgroundColor: getLayerColor(layer.name), margin:'5px', color:'#000' }}
            >{layer.name}
            </div>)
    }
}