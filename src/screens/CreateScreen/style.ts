import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {flex: 1, paddingHorizontal: 10, backgroundColor: 'rgb(207 ,212 ,218)'},
    selectedCategoryText: {
        marginTop: 14,
        marginBottom: 20,
    },
    addProductContainer: {
        position: 'absolute',
        bottom: 40,
        borderRadius: 10,
        alignSelf: 'center',
        padding: 10,
        backgroundColor: '#000',
    },
    addProductText: {
        color: '#fff',
        fontWeight: '600',
    },
});
