import Taro, { Component } from '@tarojs/taro'

export default class My extends Component {
    config = {
      navigationBarTitleText: '我的页面'
    }
  
    componentWillMount () { }
  
    componentDidMount () { }
  
    componentWillUnmount () { }
  
    render () {
      return (
        <View className='my'>
          <Text>my!</Text>
        </View>
      )
    }
  }