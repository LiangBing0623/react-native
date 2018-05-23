import React, { Component } from 'react';

import { Text ,View,TextInput} from 'react-native';
export default class MinePage extends Component {

    static navigationOptions = {
        drawerLabel:'我',
         drawerIcon: ({ tintColor }) => (
            <Image
                source={require('./../imgs/user_active.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return(
            <View style={{flex:1,paddingTop:50}}>
                <Text onPress={this._skip.bind(this)}>返回上一界面</Text>
                <Text onPress={this._skip_1.bind(this)} style={{fontSize:40}}>detail界面</Text>
            </View>
        );
    }

    /**
     * 跳转
     */
    _skip() {
        this.props.navigation.goBack();
    }
    _skip_1() {
        this.props.navigation.navigate("Detail");
    }
}