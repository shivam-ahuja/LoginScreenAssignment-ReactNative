import {Dimensions, StyleSheet} from 'react-native'
const window = Dimensions.get('window');
export const style = StyleSheet.create({
    background: {
        height: window.height,
        width: window.width,
        position: 'absolute',
        top: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    parent: {
        paddingHorizontal: 35,
        paddingTop: 20,
        paddingBottom: 60,
        justifyContent: "center",
        alignItems:'center',
        flex: 1,
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 3,

    },
    header: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#71BFB4',
        borderBottomWidth: 1.5,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 0,
    },

    input: {
        marginTop: 3,
        width: '100%'
    },
    inputOnly: {
        marginLeft: 3,
        fontSize: 21
    },
    touchFlag: {
        height: 37,
        width: "100%",
        flexDirection: 'row',
        backgroundColor: 'rgba(211,211,211,0.2)'

    },
    countryCode: {
        marginLeft: 10,
        paddingBottom: 10,
        marginTop: 8,
        textAlignVertical: 'center',
        color: 'rgb(169,167,167)',
        fontSize: 17,

    },
    downarrow: {
        paddingTop: 10
    },
    contentContainer: {
        flexGrow: 0,
        margin: 10,
    },
    scrollItems: {
        flexDirection: 'row',
    },
    imgStyle: {
        resizeMode: 'contain',
        width: 26,
        height: 26,
        marginLeft: 20,
        opacity: 0.8,
        marginTop: 18,
        marginBottom: 4

    }
})