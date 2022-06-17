import React from 'react';
import {Text, View, Image, useWindowDimensions, TouchableOpacity} from 'react-native';
import EditIcon from '../../assets/svg/edit.svg';
import {useNavigation} from '@react-navigation/native';
import {styles} from './style';

interface Props {
    image: string;
    name: string;
    price: number;
    id: string;
}

const ProductItem = (props: Props) => {
    const navigation = useNavigation();
    const {height} = useWindowDimensions();

    const onItemPressed = (id: string) => {
        navigation.navigate(
            'Detail' as never,
            {
                itemId: id,
            } as never,
        );
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => onItemPressed(props.id)}
                activeOpacity={0.8}
                style={[styles.subContainer, {height: height * 0.27}]}>
                <Image style={styles.image} source={{uri: props.image}} />
                <View style={styles.blackContainer}>
                    <Text style={styles.text}>{props.name}</Text>
                    <View style={styles.subBlackContainer}>
                        <Text style={styles.text}>${props.price}</Text>
                        <EditIcon />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default ProductItem;
