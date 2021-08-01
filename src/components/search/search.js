import Taro, { Component } from '@tarojs/taro'

import './search.less'
import '../../app.less'
export default class Search extends Component {
    constructor(props){
        super(props)
        this.state = {
          size: props.size,
          searchText: ''
        }
    }
  
    componentWillMount () { }
  
    componentDidMount () {
      
    }
    onInput = (e) =>{
      let v = e.detail?e.detail.value:e
      this.props.onChange(v)
      this.setState({
        searchText: v
      })
    }
    onConfirm = (e) =>{
      this.props.onSearch(e.detail.value)
    }
    onSearch = () => {
      this.onInput(this.state.searchText)
    }
  
    render () {
      return (
          <View className={this.state.size}>
            <View className="select_box">
              <Input type="text" class="input_box" onInput={this.onInput} onConfirm={this.onConfirm}/><View className="search_image" onClick={this.onSearch}></View>
            </View>
          </View>
      )
    }
  }