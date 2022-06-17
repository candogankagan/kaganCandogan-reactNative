import React, {useState, useEffect} from 'react';
import {useWindowDimensions, ActivityIndicator, Text, Image, View, ScrollView} from 'react-native';
import {fetchService} from '../../utils/fetchService';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styles} from './style';
import {RouteProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigators/application.navigator';

type Props = {
    route: RouteProp<RootStackParamList, 'Detail'>;
};

const DetailScreen = ({route}: Props) => {
    const {itemId} = route.params;
    const {height, width} = useWindowDimensions();
    const [detail, setDetail] = useState<any>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetchService(`products/${itemId}`, 'GET')
            .then((response: any) => {
                setDetail(response);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                setLoading(false);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <SafeAreaView edges={['top']} style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="gray" />
            ) : (
                <>
                    <Image style={{height: height * 0.5, width: width}} source={{uri: detail.avatar}} />
                    <View style={styles.bottomContainer}>
                        <View style={styles.bottomHeaderContainer}>
                            <Text style={styles.name}>{detail.name}</Text>
                            <View style={styles.priceContainer}>
                                <Text style={styles.price}>${detail.price}</Text>
                            </View>
                        </View>
                        <ScrollView>
                            <Text style={styles.detailParagh}>{detail.description}</Text>
                        </ScrollView>
                    </View>
                </>
            )}
        </SafeAreaView>
    );
};

export default DetailScreen;
