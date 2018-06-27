import React from 'react';
import {View, Text, ImageBackground, TextInput, Keyboard, TouchableOpacity} from 'react-native'
import {style} from "./style";
import GoogleButton from '../google-button/index'
import FacebookButton from '../facebook-button/index.js'
import {Button} from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome';
import CountrySelector from '../country-selector/index.js'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            countryCode: '91'
        }
    }

    setCountryCode(x) {
        this.setState({
            modalVisible: false,
            countryCode: x
        })
    }

    closeModal() {
        this.setState({
            modalVisible: false,
        })

    }

    toggleModal() {
        this.setState({
            modalVisible: !this.state.modalVisible
        })
    }

    dismissKeyboard() {
        Keyboard.dismiss();
    }

    render() {
        return (
            <View style={style.signup_dialog}>
                <Text style={style.one_tap_login}>One tap login</Text>
                <View style={style.social_login}>
                    <GoogleButton/>
                    <FacebookButton/>
                </View>
                <View style={style.or_background}>
                    <Text style={style.or_text}>or</Text>
                </View>
                <View style={style.input_container}>
                    <TouchableOpacity
                        style={style.country_code_container}
                        activeOpacity={1}
                        onPress={this.toggleModal.bind(this)}>
                        <View style={style.country_code_container}>
                            <Text>+{this.state.countryCode}</Text>
                            <CountrySelector showModal={this.state.modalVisible}
                                             countryCode={this.setCountryCode.bind(this)}
                                             closeModal={this.closeModal.bind(this)}/>
                            <Icon name={"caret-down"} size={18}/>
                        </View>
                    </TouchableOpacity>
                    <TextInput onSubmitEditing={this.dismissKeyboard.bind(this)} style={style.input}
                               underlineColorAndroid={'transparent'} placeholder={'Enter mobile number'}
                               keyboardType={'phone-pad'} maxLength={10} autoFocus={false}>
                    </TextInput>
                </View>
                <Button onPress={this.dismissKeyboard.bind(this)}
                        style={style.continue_button}>
                    <Text style={style.continue_text}>CONTINUE</Text>
                </Button>
            </View>

        )
    }
}