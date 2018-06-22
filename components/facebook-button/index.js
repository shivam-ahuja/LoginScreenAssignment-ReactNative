import React from 'react';
import {View,Image,Text} from 'react-native'
import {style} from './style.js'
export default class FacebookButton extends React.Component {
    render() {
        return(
            <View style={style.container}>
                <Image style={style.facebook_image} source={require('../../assets/images/facebook.png')}></Image>
                <Text style={style.facebook_text}>Facebook</Text>
            </View>
        )
    }
}