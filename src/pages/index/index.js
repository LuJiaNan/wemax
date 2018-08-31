import Taro, { Component } from '@tarojs/taro'
import { 
  View, 
  Swiper, 
  SwiperItem,
  Button
} from '@tarojs/components'

import React from "react";
import './index.less'
import { Table } from '../../components/table/table'
import { Search } from '../../components/search/search'
import { 
  AtButton 
} from 'taro-ui'
var Mcharts = require('../../components/mcharts/mcharts');

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor (){
    super()
    this.state = {
      param: '我是从首页带过来的参数',
      data: [{
          "id" : 1 ,
          "name" : "xiaoming"
        },{
          "id" : 2 , 
          "name" : "xiaohong"
        },{
          "id" : 3 , 
          "name" : "xiaogang"
        }
      ],
      tableData: [{
        "date": "08.23",
        "radiant": "LGD.PSD",
        "dire": "Liquid",
        "winner": "LGD.PSD",
        "score": "40:35",
        "time": "43:39"
      },{
        "date": "08.23",
        "radiant": "Liquid",
        "dire": "LGD.PSD",
        "winner": "LGD.PSD",
        "score": "13:31",
        "time": "35:44"
      }],
      column: [{
        name: 'date',
        dataIndex: '日期'
      },
      {
        name: 'radiant',
        dataIndex: '天辉'
      },
      {
        name: 'dire',
        dataIndex: '夜宴'
      },
      {
        name: 'winner',
        dataIndex: '胜者'
      },
      {
        name: 'score',
        dataIndex: '比分'
      },
      {
        name: 'time',
        dataIndex: '耗时'
      }],
      charts: {
        area: ["LGD,1500","Liqud,1200","OG,1000","EG,800","VP,600","Secret,500","VG,400","Optic,300","FTM,200",",VGJ.S,100"],
        pieData: [10, 25, 35, 30]
      }
    }
  }
  componentWillMount () { }

  componentDidMount =() =>{ 
    var pieCharts = new Mcharts({
      type: "pie",
      data: this.state.charts.pieData,
      colors: ["red", "yellow", "blue", "deepskyblue"],
      canvasId: 'canvas1',
      point: {
          x: 100,
          y: 100
      },
      radius : 50
    });
    new Mcharts({
        type: "ring",
        data: [10, 25, 35, 30],
        colors: ["red", "yellow", "blue", "deepskyblue"],
        canvasId: 'canvas2',
        point: {
            x: 100,
            y: 100
        },
        radius : 40
    });

    new Mcharts({
        type: 'bar',
        data: this.state.charts.area,
        // bgColors: "deepskyblue",
        color: '#383838',
        cHeight: 100,//表格高度
        cWidth: 270,//表格宽度
        bWidth: 14,//柱子宽度
        bMargin: 14,//柱子间距
        showYAxis: true,//是否显示Y轴
        xCaption: 'TI战队积分排名',
        yCaption: '积分',
        canvasId: 'chartContainer'
    });
  }

  componentWillUnmount () { }

  skipToDetail = () =>{
    Taro.navigateTo({
      url: `/pages/detail/detail?param=${this.state.param}`
    })
  }
  skipToMy = () =>{
    Taro.switchTab({
      // 跳转到tabbar不能加参数
      // url: `/pages/my/my?param=${this.state.param}`
      url: `/pages/my/my`
    })
  }
  onChange = (value) =>{
    console.log(value)
  }
  onSearch = (value) =>{
    console.log(value)
  }
  render () {
    const listItems = this.state.data.map((value) => {
      return <View class='li' key={value.id}> {value.id}-{value.name}</View>
    })
    return (
      <View className='index'>
        <AtButton onClick={this.skipToDetail}>gotoDetail</AtButton>
        <AtButton onClick={this.skipToMy}>gotoMy</AtButton>
        {listItems}
        <Swiper
            className='banner'
            indicatorColor='#999'
            indicatorActiveColor='#333'
            circular
            indicatorDots
            autoplay>
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
        <Search size="small" onChange={this.onChange} onSearch={this.onSearch}/>
        <Table dataSource={this.state.tableData} columns={this.state.column} styleObj={{marginTop: '20px'}}/>
        <canvas canvas-id="canvas1"></canvas>
        <canvas canvas-id="canvas2"></canvas>
        <canvas canvas-id="chartContainer" class="chartContainer"></canvas>
      </View>
    )
  }
}

