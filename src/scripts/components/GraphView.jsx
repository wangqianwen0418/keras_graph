import React from "react";
import echarts from 'echarts';
import { connect } from 'react-redux';
import ReactEcharts from 'echarts-for-react';
export default class GraphView extends React.Component {
  getOption() {
    const layers = this.props.layers
    let option = {
      xAxis: {
        type: 'value',
        show: false
      },
      yAxis: {
        type: 'value',
        show: false
      },
      series: [{
        type: 'custom',
        renderItem: function (params, api) {
          // var categoryIndex = api.value(0);
          // var start = api.coord([api.value(1), categoryIndex]);
          // var end = api.coord([api.value(2), categoryIndex]);
          // var height = api.size([0, 1])[1] * 0.6;
          console.info(api.value(1))
          return {
            type: 'group',
            children: [{
              type: 'rect',
              name: 'layer',
              shape: {
                x: 30,
                y: api.value(1) * 40,
                width: 190,
                height: 30
              },
              style: {
                fill: '#fff'
              },
              onclick: function () {
                console.info(click)
              }
            },
            {
              type: 'text',
              z: 100,
              style: {
                fill: '#333',
                text: api.value(2),
                x: 40,
                y: api.value(1) * 40 + 15
              }
            }]
          }
        },
        data: layers.map((d, i) => [0, i, d])
      }]
    }
    return option

  }
  render() {
    return (
      <div id="GraphView" >
        <h1>Have a nice day</h1>
        <ReactEcharts
          option={this.getOption()}
        />
      </div>
    );
  }
}

// export default GraphView