import Taro, { Component } from '@tarojs/taro'
import api from '../../static/api/dota2'
import { Table } from '../../components/table/table'


export default class GameItems extends Component {
    config = {
      navigationBarTitleText: '装备查看'
    }
    constructor(){
        super()
        this.state = {
          dataSource: [],
          columns:[{
            name: 'key',
            dataIndex: '序号'
          },
          {
            name: 'recipe',
            dataIndex: '是否需要合成'
          },
          {
            name: 'cost',
            dataIndex: '花费'
          },
          {
            name: 'name',
            dataIndex: '名字'
          },
          {
            name: 'secretShop',
            dataIndex: '秘密商店'
          },
          {
            name: 'sideShop',
            dataIndex: '边路商店'
          }],
          loading: true
        }
    }

    componentDidMount () { 
        Taro.request({
            url: api.GetGameItems
        }).then(res => {
            let data = res.data.result.items
            let tableData = [];
            data.map((value,i)=>{
                tableData.push({
                    key: i,
                    id: value.id,
                    recipe: value.recipe,
                    cost: value.cost,
                    name: value.name,
                    secretShop: value.secret_shop,
                    sideShop: value.side_shop
                })
            })
            this.setState({
                dataSource: tableData,
                loading: false
            })
        }).catch((error) => {
            console.log(error)
            this.setState({
                loading: false
            })
        })
    }
  
    render () {
    const { dataSource, columns, loading } = this.state
    return (
        <View>
            <Table dataSource={dataSource} columns={columns} loading={loading}/>
        </View>
    )
    }
  }