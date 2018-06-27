import {StyleSheet, Dimensions} from 'react-native'

export const style = StyleSheet.create({
    signup_dialog: {
        width: 310,
        height: 330,
        backgroundColor: 'white',
        margin: 10,
        borderWidth: 1,
        borderColor: 'rgba(211,211,211,0.2)',
        borderRadius: 7,
        padding: 10,
        alignItems: 'center',
    },
    one_tap_login: {
        marginTop: 15,
    },
    social_login: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        left: 0,
        right: 0,
        height: 40,
        marginTop: 10
    },
    or_background: {
        backgroundColor: 'rgba(211,211,211,0.2)',
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        marginBottom:35
    },
    or_text: {
        fontWeight: 'bold'
    },
    input_container: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        right: 0,
        left: 0,
        height: 40,
        width: '100%',
        alignItems:'center'

    },
    input: {
        flex:1,
        paddingLeft:10
    },
    continue_button: {
        backgroundColor:'yellow',
        height:40,
        width: '100%',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    continue_text: {
        color:'black',
        fontWeight:'bold'
    },
    country_code_container: {
        backgroundColor: 'rgba(211,211,211,0.2)',
        height:'100%',
        top:0,
        flexDirection:'row',
        bottom:0,
        alignItems:'center',
        padding:2
    }

})