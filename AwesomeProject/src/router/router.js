import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';  
import React,{Component} from 'react';  
// import {Image} from 'react-native';  
import HomeScreen from '../views/HomepagesPage';  
import MineScreen from '../views/MinePage';
import TabBarItem from '../components/TabBarItem';
import Detail from '../views/Detail';

// class TabBarItem extends Component {  
  
//     render() {  
//         return(  
//             <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }  
//                 style={ { tintColor:this.props.tintColor,width:25,height:25 } }  
//             />  
//         )  
//     }  
      
// }


const Tab = TabNavigator(  
  	{  
	    Home:{  
			screen:HomeScreen,  
			navigationOptions:({navigation}) => ({  
        		tabBarLabel:'首页',  
        		tabBarIcon:({focused,tintColor}) => (  
					<TabBarItem  
						tintColor={tintColor}  
						focused={focused}  
						normalImage={require('../assets/imgs/home.png')}  
						selectedImage={require('../assets/imgs/home_active.png')}  
					/>  
        		)  
      		}),  
	    },  
  
    	Mine:{  
			screen:MineScreen,  
			navigationOptions:({navigation}) => ({  
				tabBarLabel:'我的',  
				tabBarIcon:({focused,tintColor}) => (  
			        <TabBarItem  
			        	tintColor={tintColor}  
			         	focused={focused}  
			         	normalImage={require('../assets/imgs/user.png')}  
			         	selectedImage={require('../assets/imgs/user_active.png')}  
			        />  
			    )  
			}),  
		}  
	},
	{  
		tabBarComponent:TabBarBottom,  
		tabBarPosition:'bottom',  
		swipeEnabled:true,  
		animationEnabled:false,  
		lazy:true,  
		tabBarOptions:{  
			activeTintColor:'#e4393c',  
			inactiveTintColor:'#979797',  
			style:{backgroundColor:'#ffffff'},  
			labelStyle: {fontSize: 10}, // 文字大小  
		}
    } 
  
  );

const Navigator = StackNavigator(  
    {  
        Tab:{screen:Tab},  
        Detail:{
            screen:Detail,
            navigationOptions:{
                headerTitle:'详情',
                headerBackTitle:"返回",
            }
        }  
    },{  
        navigationOptions:{ 
            // header:null,
            headerTitle:"标题",
            headerBackTitle:"返回",  
            headerTintColor:'#333333',  
            showIcon:true,  
            swipeEnabled:false,  
            animationEnabled:false,  
        }, 
        mode:'card',  
        headerMode:'float'
    }); 
export  default Navigator;
// export Tab;
