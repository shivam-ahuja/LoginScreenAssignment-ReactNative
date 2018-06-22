import React from 'react';
import {View,Image,Text} from 'react-native'
import {style} from './style.js'
export default class GoogleButton extends React.Component {
    render() {
        return(
            <View style={style.container}>
                <Image style={style.google_image} source={require('../../assets/images/google.png')}></Image>
                <Text style={style.google_text}>Google</Text>
            </View>
        )
    }
}