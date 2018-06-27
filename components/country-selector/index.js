import React, {Component} from 'react'
import {Text, Modal, TouchableOpacity, View, TextInput, Image, FlatList, TouchableNativeFeedback} from 'react-native'
import {style} from './style.js'
import Icon from 'react-native-vector-icons/FontAwesome';

import cca2List from '../../assets/data/cca2'
import CountryListitem from '../country-listitem/index.js'

const countries = require('../../assets/data/countries')


class CountrySelector extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: '',
            dataValue: cca2List
        }
    }

    onSelectCountry(cca2) {
        this.props.closeModal();
        this.props.countryCode(countries[cca2].callingCode)
        this.setState({
            filter: '',
            dataValue: cca2List
        })
    }

    handleFilterChange = value => {
        var re = new RegExp(value.trim(), 'gi');
        const filteredCountries = value.trim() === '' ? cca2List : (cca2List || []).filter(country => countries[country].name.common.match(re));
        this.setState({
            filter: value,
            dataValue: filteredCountries
        })
    }
    _keyExtractor = (item, index) => {
        return index.toString();
    };

    renderCountry(country) {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={this.onSelectCountry.bind(this,country.item)}
            >
                <CountryListitem image={countries[country.item].flag} name={countries[country.item].name.common}/>
            </TouchableOpacity>
        );
    }

    render() {
        return (
            <Modal
                transparent={true}
                animationType={'none'}
                visible={this.props.showModal}
                onRequestClose={() => this.props.closeModal()}
            >
                <View style={style.background}>
                <View style={style.parent}>
                    <View style={style.modal_container}>
                        <View style={style.header}>
                            <Icon name="search" size={18}/>
                            <TextInput
                                autoCorrect={false}
                                placeholder={'Search...'}
                                placeholderTextColor={style.placeholderText}
                                underlineColorAndroid={'transparent'}
                                style={[
                                    style.input,
                                    style.input_only
                                ]}
                                onChangeText={this.handleFilterChange}
                                value={this.state.filter}
                            />
                        </View>
                        <FlatList
                            data={this.state.dataValue}
                            keyExtractor={this._keyExtractor}
                            renderItem={country => (this.renderCountry(country))}
                            initialNumToRender={30}
                            maxToRenderPerBatch={400}
                            removeClippedSubviews={true}
                            style={style.content_container}
                        />
                    </View>
                </View>
                </View>
            </Modal>
        );
    }
}

export default CountrySelector;