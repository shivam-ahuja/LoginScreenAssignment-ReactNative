import {StyleSheet} from 'react-native'

export const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        borderRadius: 2,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginRight:2
    },
    google_text: {
        marginLeft: 10,
        color: 'white',
        fontWeight: 'bold'
    },
    google_image: {
        height: 20,
        width: 20
    }
})