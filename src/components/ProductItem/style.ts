import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        width: '50%',
        backgroundColor: 'rgb(207 ,212 ,218)',
    },
    subContainer: {
        backgroundColor: '#fff',
        margin: 5,
        borderRadius: 6,
        paddingTop: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    blackContainer: {
        width: '100%',
        borderRadius: 6,
        backgroundColor: '#000',
        padding: 5,
    },
    subBlackContainer: {
        marginTop: 4,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    text: {
        color: '#fff',
    },
    image: {
        height: 100,
        width: 100,
    },
});
