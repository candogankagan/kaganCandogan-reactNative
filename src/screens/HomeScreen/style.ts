import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'rgb(207 ,212 ,218)'},
    productContainer: {
        marginHorizontal: 5,
        marginTop: 10,
    },
    plusContainer: {
        position: 'absolute',
        right: 20,
        bottom: 25,
        backgroundColor: '#fff',
        height: 40,
        width: 40,
        borderRadius: 30,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    plusText: {
        fontSize: 20,
    },
    loading: {
        position: 'absolute',
        top: '50%',
        alignSelf: 'center',
    },
});
