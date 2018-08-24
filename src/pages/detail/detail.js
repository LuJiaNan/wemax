import Taro, { 
  Component,
  View
} from '@tarojs/taro'

export default class My extends Component {
    config = {
      navigationBarTitleText: '详情'
    }
    constructor(){
        super()
    }
  
    componentWillMount () { }
  
    componentDidMount = () => {
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
          <View className="detail-head">
            
          </View>
          <View className="detail-body">

          </View>
          <View className="detail-footer">

          </View>
        </View>
      )
    }
  }