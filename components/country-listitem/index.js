import React from 'react';
import {View,Image,Text} from 'react-native'
import {style} from "./style";


export default class CountryListitem extends React.PureComponent {
    render() {
        return(
            <View style={style.container}>
                <Image style={style.flag} source={{ uri:this.props.image}}></Image>
                <Text style={style.country_name}>{this.props.name}</Text>
            </View>
        )
    }
}