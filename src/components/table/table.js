import Taro, { Component } from '@tarojs/taro'

import './table.less'
import '../../app.less'
export default class Table extends Component {
    constructor(props){
        super(props)
        this.state = {
          data: [],
          column: [],
        }
    }
  
    componentWillMount () { }
  
    componentDidMount () {
      this.setState({
        data: this.props.dataSource,
        column: this.props.columns
      })
    }
  
    render () {
      
      let columnData = this.state.column;//1

      let columnList = columnData.map((value,i)=>{//2
        return <view key={i}>{value.dataIndex}</view>
      })

      let dataList = this.state.data.map((value,i)=>{
        // console.log('是不是数组：'+value instanceof Array)
        // console.log(value)
        return (
          <view className='taro-table-tr flex flex-align-center flex-pack-justify' key={i}>
            { 

              //table为空
              // this.state.column.map((column,j)=>{
              //   console.log(column)
              //   return (
              //     <view key={i+j}>{value[column.name]}</view>
              //   )
              // })


              //table-head消失，table-body正常显示(1代码段位于2之前,当前正常显示)
              columnData.map((column,j)=>{
                return (
                  <view key={i+j}>{value[column.name]}</view>
                )
              })

              //value是对象，此处可以map的原因是转为小程序代码后，map=>wx:for,真实代码不调对象.map，所以不报错
              //table正常显示
              // value.map((name,j)=>{
              //   // console.log(name)
              //   return (
              //     <view key={i+j}>{name}</view>
              //   )
              // })
            }
          </view>
        )
      })


      return (
        <view className='taro-table'>
          <view className='taro-table-head flex flex-align-center flex-pack-justify'>
            {columnList}
          </view>
          <view className='taro-table-body'>
            {dataList}
          </view>
        </view>
      )
    }
  }