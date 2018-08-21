import Taro, { Component } from '@tarojs/taro'
import { 
  View, 
  Swiper, 
  SwiperItem,
} from '@tarojs/components'
import React from "react";
import './index.less'
import { Table } from '../../components/table/table'
import { Search } from '../../components/search/search'

export default class Index extends Component {
  config = {
    navigationBarTitleText: '首页'
  }
  constructor (){
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
        "date": "2018-08-15",
        "radiant": "LGD.PSD",
        "dire": "Liquid",
        "winner": "LGD.PSD",
        "score": "40:35",
        "time": "43:35"
      },{
        "date": "2018-08-16",
        "radiant": "LGD.PSD",
        "dire": "Liquid",
        "winner": "LGD.PSD",
        "score": "40:35",
        "time": "43:35"
      },{
        "date": "2018-08-17",
        "radiant": "LGD.PSD",
        "dire": "Liquid",
        "winner": "LGD.PSD",
        "score": "40:35",
        "time": "43:35"
      },{
        "date": "2018-08-18",
        "radiant": "LGD.PSD",
        "dire": "Liquid",
        "winner": "LGD.PSD",
        "score": "40:35",
        "time": "43:35"
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
      }]
    }
  }
  componentWillMount () { }

  componentDidMount () { 
    
  }

  componentWillUnmount () { }

  skipToDetail(){
    Taro.navigateTo({
      url: `/pages/detail/detail?param=${this.state.param}`
    })
  }
  skipToMy(){
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
      return <view class='li' key={value.id}> {value.id}-{value.name}</view>
    })
    return (
      <View className='index'>
        <Button onClick={this.skipToDetail}>gotoDetail</Button>
        <Button onClick={this.skipToMy}>gotoMy</Button>
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
      </View>
    )
  }
}

