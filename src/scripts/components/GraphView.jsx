import React from "react";
import echarts from "echarts";
import ReactEcharts from "echarts-for-react";
import { getLayerColor } from '../assets/layers'
export default class GraphView extends React.Component {

  constructor(props) {
    super(props)
    this.getInitalOption = this.getInitalOption.bind(this)
    this.layerOnclick = this.layerOnclick.bind(this)
    this.onDragging = this.onDragging.bind(this)
    this.addDragEvent = this.addDragEvent.bind(this)
    let data = this.props.layers.map((d, i) => [0, i, d.name, d.pars]);
    this.data = data
    let option = this.getInitalOption(data)
    this.state = { option }
  }

  getInitalOption(data) {
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
          renderItem: function (params, api) {
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
                  onclick: () => { console.info('click') },
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
          data
        }
      ]
    };
    return option;
  }

  addDragEvent() {
      // 声明一个 graphic component，里面有若干个 type 为 'circle' 的 graphic elements。
      // 这里使用了 echarts.util.map 这个帮助方法，其行为和 Array.prototype.map 一样，但是兼容 es5 以下的环境。
      // 用 map 方法遍历 data 的每项，为每项生成一个圆点。
      let option = this.state.option
      let self = this
      let newOption={
        ...option,
        graphic: this.data.map((dataItem, dataIndex) => {
          return {
            type: 'rect',
            shape: {
              width: 190,
              height: 30,

            },
            style: {
              fill: '#fff'
            },
            // 用 transform 的方式对圆点进行定位。position: [x, y] 表示将圆点平移到 [x, y] 位置。
            // 这里使用了 convertToPixel 这个 API 来得到每个圆点的位置，下面介绍。
            position: this.myChart.convertToPixel('grid', dataItem),
            // invisible: true,
            draggable: true,
            z: 100,
            ondrag: echarts.util.curry(this.onDragging, dataIndex)
          };
        })}
    this.setState({ option: newOption })
  }

  onDragging(dataIndex) {
    let data = this.data
    let self = this
    data[dataIndex] = [
      ...self.myChart.convertFromPixel('grid', self.position),
      data[dataIndex][2],
      data[dataIndex][3]
    ]
    // 用更新后的 data，重绘折线图。
    this.setState({data})
  }

  layerOnclick(d) {
    let option = this.state.option
    let newData = option.series[0].data
    newData[d.dataIndex] = d.data.map((d, i) => i == 1 ? d * 1.5 : d)
    option.series.push({
      type: 'bar',
      data: [[4, 5]]
    })
    this.setState({ option })
  }
  componentDidMount() {
    this.myChart = this.eChart.getEchartsInstance()
    this.addDragEvent()
  }
  render() {
    let onEvents = {
      click: this.layerOnclick
    };
    // let chart = <div/>
    // if (this.state.option) {
    //   chart = <ReactEcharts
    //       ref='echarts_react'
    //       onEvents={onEvents}
    //       option={this.state.option}
    //     />
    // } 
    return (
      <div id="GraphView">
        <h1>Have a nice day</h1>
        <ReactEcharts
         ref={e=>{this.eChart=e}}
         onEvents={onEvents}
         option={this.state.option}
       />
      </div>
    );
  }
}

// export default GraphView
