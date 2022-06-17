import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
    bottomContainer: {
        flex: 1,
        marginTop: 50,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        backgroundColor: '#000',
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    bottomHeaderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    name: {
        width: '80%',
        fontSize: 20,
        fontWeight: '800',
        color: '#fff',
    },
    priceContainer: {
        width: '20%',
        alignItems: 'flex-end',
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        color: '#fff',
    },
    detailParagh: {
        fontSize: 12,
        color: '#fff',
        lineHeight: 16,
        marginTop: 10,
    },
});
