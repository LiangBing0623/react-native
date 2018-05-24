// import {StackNavigator,TabNavigator,TabBarBottom} from 'react-navigation';  
// import HomeScreen from './pages/HomepagesPage';  
// import MineScreen from './pages/MinePage';
// import TabBarItem from './components/TabBarItem';
// import Detail from './pages/Detail';

import Navigator from './src/router/router'; //引入路由

import React, { Component } from 'react';
import { Text ,View,TextInput} from 'react-native';

// export default class HelloWorldApp extends Component {
//   render() {
//     return (
//         <View >
//             <View  style={{backgroundColor: '#e4393c',paddingTop:20}}>
//                 <View style={{flexDirection:"row",padding:10}} >
//                     <View style={{paddingRight:10}}><Text style={{lineHeight: 40}}>长沙</Text></View>
//                     <TextInput placeholder="搜索您想要的商品" placeholderTextColor="#fff" 
//                         style={{padding:10, flex:1,backgroundColor: 'rgba(255,255,255,0.3)'}}/>
//                 </View>
//             </View>
//         </View>
//     );
//   }
// }

export default class Demo extends Component {  
  
  render() {  
        return (  
          <Navigator />  
        );  
  }  
} 



// const Tab = TabNavigator(  
//   {  
//     Home:{  
//       screen:HomeScreen,  
//       navigationOptions:({navigation}) => ({  
//         tabBarLabel:'首页',  
//         tabBarIcon:({focused,tintColor}) => (  
//           <TabBarItem  
//             tintColor={tintColor}  
//             focused={focused}  
//             normalImage={require('./imgs/home.png')}  
//             selectedImage={require('./imgs/home_active.png')}  
//           />  
//         )  
//       }),  
//     },  
  
//     Mine:{  
//           screen:MineScreen,  
//           navigationOptions:({navigation}) => ({  
//           tabBarLabel:'我的',  
//           tabBarIcon:({focused,tintColor}) => (  
//             <TabBarItem  
//              tintColor={tintColor}  
//               focused={focused}  
//               normalImage={require('./imgs/user.png')}  
//               selectedImage={require('./imgs/user_active.png')}  
//             />  
//           )  
//         }),  
//       },  
//     },

//     {  
//       tabBarComponent:TabBarBottom,  
//       tabBarPosition:'bottom',  
//       swipeEnabled:true,  
//       animationEnabled:false,  
//       lazy:true,  
//       tabBarOptions:{  
//         activeTintColor:'#e4393c',  
//         inactiveTintColor:'#979797',  
//         style:{backgroundColor:'#ffffff',},  
//         labelStyle: {  
//               fontSize: 10, // 文字大小  
//           },  
//       }  
        
//     }  
  
//   );



// const Navigator = StackNavigator(  
//     {  
//         Tab:{screen:Tab},  
//         Detail:{
//             screen:Detail,
//             navigationOptions:{
//                 headerTitle:'详情',
//                 headerBackTitle:"返回",
//             }
//         }  
//     },{  
//         navigationOptions:{ 
//             // header:null,
//             headerTitle:"标题",
//             headerBackTitle:"返回",  
//             headerTintColor:'#333333',  
//             showIcon:true,  
//             swipeEnabled:false,  
//             animationEnabled:false,  
//         }, 
//         mode:'card',  
//         headerMode:'float'
//     }); 



