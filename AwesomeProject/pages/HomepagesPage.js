import React, { Component } from 'react';

import { Text ,View,TextInput} from 'react-native';
export default class HomePage extends Component {

    static navigationOptions = {
        drawerLabel: '首页',
        drawerIcon:({tintColor}) => (
            <Image
                source={require('./../imgs/home.png')}
                style={[styles.icon, {tintColor: tintColor}]}/>
        ),
    };

    render() {
        return(
            <View style={{flex:1}}>
                <View  style={{backgroundColor: '#e4393c',paddingTop:20}}>
                    <View style={{flexDirection:"row",padding:10}} >
                        <View style={{paddingRight:10}}><Text style={{lineHeight: 40}}>长沙</Text></View>
                        <TextInput placeholder="搜索您想要的商品" placeholderTextColor="#fff" 
                            style={{padding:10, flex:1,backgroundColor: 'rgba(255,255,255,0.3)'}}/>
                    </View>
                </View>
                <Text onPress={this._skip.bind(this)}>点击跳转</Text>
                <Text onPress={this._skip_2.bind(this)}>点击跳转2</Text>
                <Text onPress={this._skip_1.bind(this)} style={{fontSize:40}}>detail界面</Text>
            </View>
        );
    }

    _skip() {
        this.props.navigation.navigate("Mine");
    }
    _skip_1() {
        this.props.navigation.navigate("Detail");
    }
    _skip_2() {
        this.props.navigation.navigate("Tab");
    }
}
