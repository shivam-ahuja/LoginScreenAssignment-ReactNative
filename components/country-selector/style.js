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
    modal_container: {
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
    input_only: {
        marginLeft: 3,
        fontSize: 21
    },
    content_container: {
        flexGrow: 0,
        margin: 10,
    }
})