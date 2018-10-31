import Taro, { Component } from '@tarojs/taro'

import './table.less'
import '../../app.less'
import { 
  AtIcon  
} from 'taro-ui'
export default class Table extends Component {
    constructor(props){
        super(props)
        this.state = {
          data: [],
          column: []
        }
    }
  
    componentWillMount () {}
  
    componentDidMount () {
      this.setState({
        data: this.props.dataSource,
        column: this.props.columns,
        styleObj: this.props.styleObj,
        loading: this.props.loading || false,
        hideHead: this.props.hideHead || false,
        fixHead: this.props.fixHead || false
      })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      const { data } = this.state
      const newdata = nextProps.dataSource
      if (data !== newdata) {
        this.setState({
          data: nextProps.dataSource,
          loading: nextProps.loading
        })
      }
    }
  
    render () {
      //1
      // let columnList = this.state.column.map((value,i)=>{
      //   return <View key={i}>{value.dataIndex}</View>
      // })
      // let columnData = this.state.column;

      //2
      let columnData = this.state.column;

      let columnList = columnData.map((value,i)=>{
        return <View key={i}>{value.dataIndex}</View>
      })
      //

      let dataList = this.state.data.map((value,i)=>{
        // console.log('是不是数组：'+value instanceof Array)
        // console.log(value)
        return (
          <View className='taro-table-tr flex flex-align-center flex-pack-justify' key={i}>
            { 

              //table为空
              // this.state.column.map((column,j,i)=>{
              //   console.log(column)
              //   return (
              //     <View key={i+j}>{value[column.name]}</View>
              //   )
              // })


              //table-head消失，table-body正常显示(1代码段顺序错误,当前正常显示),需要传入外层循环的index，直接获取不到
              columnData.map((column,j,i)=>{
                return (
                  <View key={i+j}>{value[column.name]}</View>
                )
              })

              //value是对象，此处可以map的原因是转为小程序代码后，map=>wx:for,真实代码不调对象方法map，所以不报错,h5可能会报错
              //table正常显示
              // value.map((name,j,i)=>{
              //   // console.log(name)
              //   return (
              //     <View key={i+j}>{name}</View>
              //   )
              // })
            }
          </View>
        )
      })

      //样式获取
      const  { styleObj, loading, hideHead } = this.state
      let styleStr = ''
      let Acode="A".charCodeAt(0);
      let Zcode="Z".charCodeAt(0);
      for(let key in styleObj){ 
        let value =  styleObj[key];
        for(let i=0;i<key.length;i++){
          let letter = key.charAt(i);
          if(letter.charCodeAt(0)>=Acode&&letter.charCodeAt(0)<=Zcode){
            key = key.split(letter)[0]+'-'+ letter.toLowerCase() +key.split(letter)[1]
          }
        } 
        styleStr += `${key}:${value};`     
      } 
      return (
        <View className='taro-table' style={styleStr}>
          {
            hideHead? 
            <View></View>
            :
            <View>
                <View className='taro-table-head flex flex-align-center flex-pack-justify'>
                  {columnList}
                </View>
            </View>
          }
          {
            !loading?
            <View className='taro-table-body'>
              {dataList}
            </View>
            :
            <View className='taro-table-body taro-table-loading-body'>
              <AtIcon value='loading-3' size='30' color='deepskyblue'></AtIcon>
            </View>
          }
        </View>
      )
    }
  }