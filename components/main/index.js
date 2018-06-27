import React from 'react'
import {View, Text, Image, ImageBackground} from 'react-native'
import {style} from './style.js'
import SignUp from '../signup/index.js'

export default class Splash extends React.Component {
    render() {
        return (
            <View style={style.container}>
                {/*<Image style={style.logo} source={require('../../assets/images/logo.png')}/>*/}
                <ImageBackground style={style.image_background} source={require('../../assets/images/banner.png')}>
                </ImageBackground>
                <View style={style.background}>
                    <View style={style.main_content}>
                        <View style={style.login_Container}>
                            <Text style={style.login}>Log In/Sign Up</Text>
                        </View>
                        <SignUp />
                        <Text style={style.skip}>skip</Text>
                    </View>
                  </View>
            </View>
        )
    }
}

