import {Text, View} from 'react-native';
import React from 'react';
import SearchIcon from '../../assets/svg/search.svg';
import {styles} from './style';

const HeaderSearchBar = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>UPayments Store</Text>
            <SearchIcon />
        </View>
    );
};

export default HeaderSearchBar;
