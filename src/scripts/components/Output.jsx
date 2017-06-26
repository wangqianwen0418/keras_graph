import {inOutStyle} from '../../style/styleObj';
import React, {Component} from 'react';

export default class Output extends Component{
    render(){
        const {name}=this.props
        return (<div
        style={inOutStyle(name)}>
        {name}
        </div>)
    }
}