import {StyleSheet, Dimensions} from 'react-native'

export const style = StyleSheet.create({
    container: {},
    logo: {top: 20},
    image_background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        position:'absolute'
    },
    background: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,
        justifyContent:'center',
        alignItems:'center',
    },
    main_content: {
        flex: 1,
        flexDirection: 'column',
    },
    login_Container: {
        flex: 1.5,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        alignItems: 'center'
    },
    login: {
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black'
    },
    skip: {
        flex: 1.5,
        paddingTop: 15,
        alignSelf: 'center',
        color: 'grey'
    }
})