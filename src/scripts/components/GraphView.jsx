import React from "react";
import echarts from "echarts";
import { connect } from "react-redux";
import ReactEcharts from "echarts-for-react";
import {getLayerColor} from '../assets/layers'
export default class GraphView extends React.Component {
  constructor(props) {
    super(props)
    this.getOption = this.getOption.bind(this)
    this.layerOnclick = this.layerOnclick.bind(this) 
    let data = this.props.layers.map((d, i) => [0, i, d.name, d.pars]);
    this.state = {data}
  }
  getOption() {
    
    let option = {
      xAxis: {
        type: "value",
        show: false
      },
      yAxis: {
        type: "value",
        show: false
      },
      series: [
        {
          type: "custom",
          tooltip: {
            trigger: "item",
            formatter: "a layer"
          },
          renderItem: function(params, api) {
            return {
              type: "group",
              children: [
                {
                  type: "rect",
                  name: "layer",
                  $action: 'merge',
                  shape: {
                    x: 30,
                    y: api.value(1) * 40,
                    width: 190,
                    height: 30
                  },
                  onclick: ()=>{console.info('click')},
                  style: {
                    fill: getLayerColor(api.value(2)),
                    lineWidth: 2,
                    stroke: '#fff'
                  }
                },
                {
                  type: "text",
                  z: 100,
                  style: {
                    fill: "#fff",
                    text: api.value(2),
                    textAlign: 'center',
                    x: 130,
                    y: api.value(1) * 40 + 15,
                    font: '15px "STHeiti", sans-serif',
                    lineWidth: 5
                  }
                }
              ]
            };
          },
          data: this.state.data
        }
      ]
    };
    return option;
  }
  layerOnclick(d) {
    let option = this.getOption()
    let newData = option.series[0].data
    newData[d.dataIndex] = d.data.map((d, i)=>i==1?d*1.5:d)
    console.info(newData)
    this.setState({newData})
  }
  render() {
    let onEvents = {
      click: this.layerOnclick
    };
    return (
      <div id="GraphView">
        <h1>Have a nice day</h1>
        <ReactEcharts onEvents={onEvents} option={this.getOption()} />
      </div>
    );
  }
}

// export default GraphView
