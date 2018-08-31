import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

class App extends Component {
  config = {
    pages: [
      'pages/index/index',
      'pages/my/my',
      'pages/detail/detail',
      'pages/function/function'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: "#dbdbdb",
      selectedColor: "#1296db",
      backgroundColor: "#FBFBFB",
      borderStyle: "#2A8CE5",
      list: [{
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: "./asset/images/index.png",
        selectedIconPath: "./asset/images/index_selected.png"
      },
      {
        pagePath: "pages/my/my",
        text: "我的",
        iconPath: "./asset/images/my.png",
        selectedIconPath: "./asset/images/my_selected.png"
      },{
        pagePath: "pages/function/function",
        text: "功能",
        iconPath: "./asset/images/function.png",
        selectedIconPath: "./asset/images/function_selected.png"
      }]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  render () {
    return (
      <Index/>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
