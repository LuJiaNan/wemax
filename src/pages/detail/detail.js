import Taro, { Component } from '@tarojs/taro'

export default class My extends Component {
    config = {
      navigationBarTitleText: '详情'
    }
    constructor(){
        
    }
  
    componentWillMount () { }
  
    componentDidMount () {
        const { param }=this.$router.params
        console.log(param)
     }
  
    componentWillUnmount () { }
  
    componentDidShow () { }
  
    componentDidHide () { }
  
    render () {
      return (
        <View className='detail'>
          <Text>detail!</Text>
        </View>
      )
    }
  }