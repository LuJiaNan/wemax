import Taro, { 
  Component,
  View
} from '@tarojs/taro'
import { Table } from '../../components/table/table'
import api from '../../static/api/dota2'
import tool from '../../static/tool/tool'


export default class My extends Component {
    config = {
      navigationBarTitleText: '详情'
    }
    constructor(){
      super()
      this.state = {
        dataSource: [],
        columns:[{
          name: 'matchId',
          dataIndex: '比赛id'
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
          name: 'lobbyType',
          dataIndex: '模式'
        },
        {
          name: 'startTime',
          dataIndex: '时间'
        }],
        loading: true
      }
    }
  
    componentWillMount () { }
  
    componentDidMount = () => {
      const { param }=this.$router.params
      console.log(param)
      Taro.request({
        url: api.GetMatchHistory
      }).then(res => {
        let data = res.data.result
        let tableData = [];
        data.matches.map((value,i)=>{
          tableData.push({
            matchId: value.match_id,
            radiant: value.radiant_team_id,
            dire: value.dire_team_id,
            lobbyType: value.lobby_type,
            startTime: tool.transformUnixTimestampRemoveYear(value.start_time)
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
      // this.getMatchDetail('4087752285');
    }

    getMatchDetail(matchId){
      Taro.request({
        url: api.GetMatchDetails,
        data: {
          match_id: matchId
        }
      }).then(res => {
        let data = res.data.result
        console.log(data);
      }).catch((error) => {
        console.log(error)
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