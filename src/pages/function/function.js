import Taro, { Component } from '@tarojs/taro'
import { AtGrid } from 'taro-ui'

export default class Function extends Component {
    config = {
      navigationBarTitleText: '全部功能'
    }
  
    constructor(){
        super();
        this.state = {
            itemsData:[
            {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                value: '更新日志'
            },
            {
                image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                value: '英雄技能'
            },
            {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                value: '英雄查看'
            },
            {
                image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                value: '装备查看'
            },
            {
                image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                value: '天梯排名'
            },
            {
                image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                value: '战队排名'
            },
            {
                image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                value: 'TI积分'
            },
            {
                image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                value: '待定'
            },
            {
                image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                value: '待定'
            }
        ]}
    }
    componentDidMount () {
        
    }

    gotoGameItemsPage = (e) =>{
        let destinationPath = ''
        switch(e.value){
            case '更新日志': destinationPath = '';break;
            case '英雄技能': destinationPath = '';break;
            case '装备查看': destinationPath = `/pages/gameItems/gameItems`;break;
            case '英雄查看': destinationPath = '';break;
            case '天梯排名': destinationPath = '';break;
            case '战队排名': destinationPath = '';break;
            case 'TI积分': destinationPath = '';break;
            default : destinationPath = ''
        }
        Taro.navigateTo({
            url: destinationPath
        })
    }
  
    render () {
      return (
        <View className='function'>
          <AtGrid onClick={this.gotoGameItemsPage.bind(this)} data={this.state.itemsData}/>
        </View>
      )
    }
  }