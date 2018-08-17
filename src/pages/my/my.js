import Taro, { Component } from '@tarojs/taro'

export default class My extends Component {
    config = {
      navigationBarTitleText: '我的页面'
    }
  
    componentWillMount () { }
  
    componentDidMount () { 
      const { param }=this.$router.params
      console.log(param)
    }
  
    componentWillUnmount () { }
  
    render () {
      return (
        <View className='my'>
          <Text>my!</Text>
        </View>
      )
    }
  }