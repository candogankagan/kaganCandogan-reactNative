import React, {useEffect, useState, useMemo} from 'react';
import {FlatList, View, ActivityIndicator} from 'react-native';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import {fetchService} from '../../utils/fetchService';
import CategoriesScroll from '../../components/CategoriesScroll';
import ProductItem from '../../components/ProductItem';
import HeaderSearchBar from '../../components/HeaderSearchBar';
import {useIsFocused} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/application.navigator';
import Button from '../../components/Button';

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Home'>;
}

interface ChosenType {
    itemId: number;
    name: string;
}
const HomeScreen = ({navigation}: Props) => {
    const isFocused = useIsFocused();
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [chosen, setChosen] = useState<ChosenType>({itemId: 0, name: 'All'});

    const onPlusPressed = () => {
        navigation.navigate('Create');
    };

    const filteredData = useMemo(
        () =>
            products.filter(item => {
                if (chosen.name == 'All') {
                    return item;
                } else {
                    return item?.category?.toLowerCase().includes(chosen.name.toLowerCase());
                }
            }),
        [products, chosen],
    );

    useEffect(() => {
        if (!isFocused) {
            return;
        }
        setLoading(true);
        fetchService('products/', 'GET')
            .then((response: any) => {
                setProducts(response);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [isFocused]);

    return (
        <SafeAreaView style={styles.container}>
            <HeaderSearchBar />
            <CategoriesScroll
                all
                chosen={chosen}
                setChosen={setChosen}
                itemFocusContainerStyle={{backgroundColor: '#fff'}}
                itemContainerStyle={{backgroundColor: '#000'}}
                itemFocusTextStyle={{color: '#000'}}
            />
            {loading ? (
                <View style={styles.loading}>
                    <ActivityIndicator size="large" color="gray" />
                </View>
            ) : (
                <FlatList
                    showsVerticalScrollIndicator={false}
                    style={styles.productContainer}
                    data={filteredData}
                    numColumns={2}
                    renderItem={({item}) => (
                        <ProductItem id={item.id} name={item.name} price={item.price} image={item.avatar} />
                    )}
                    keyExtractor={item => item.id}
                />
            )}
            <Button
                onPressed={onPlusPressed}
                containerStyle={styles.plusContainer}
                textStyle={styles.plusText}
                text={'+'}
            />
        </SafeAreaView>
    );
};

export default HomeScreen;
