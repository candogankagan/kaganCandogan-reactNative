import React, {useState} from 'react';
import {Text, Alert, useWindowDimensions} from 'react-native';
import {styles} from './style';
import {SafeAreaView} from 'react-native-safe-area-context';
import Input from '../../components/Input';
import useInput from '../../hooks/useInput';
import CategoriesScroll from '../../components/CategoriesScroll';
import {fetchService} from '../../utils/fetchService';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../navigators/application.navigator';
import Button from '../../components/Button';

interface Props {
    navigation: NativeStackNavigationProp<RootStackParamList, 'Create'>;
}

const CreateScreen = ({navigation}: Props) => {
    const {height} = useWindowDimensions();
    const [chosen, setChosen] = useState({itemId: '', name: ''});
    const title = useInput((e: string) => e.length >= 2 && e.length <= 24);
    const price = useInput((e: string) => e.length >= 1 && e.length <= 10);
    const URL = useInput((e: string) => e.length >= 1);
    const description = useInput((e: string) => e.length >= 1);

    const onAddPressed = () => {
        fetchService('products', 'POST', {
            name: title.value,
            price: Number(price.value),
            category: chosen.name,
            description: description.value,
            avatar: URL.value,
            developerEmail: 'candogankagan@gmail.com',
        })
            .then(response => {
                console.log(response);
                navigation.goBack();
            })
            .catch(err => {
                Alert.alert(err);
            });
    };

    return (
        <SafeAreaView style={styles.container}>
            <Input placeHolder={'Product title'} text={title.value} setText={title.setValue} />
            <Input placeHolder={'Price'} text={price.value} setText={price.setValue} />
            <Input
                inputContainerStyle={{paddingVertical: 5, height: height * 0.1, borderRadius: 10, borderWidth: 1}}
                placeHolder={'Description'}
                text={description.value}
                setText={description.setValue}
            />
            <Input placeHolder={'Image Link'} text={URL.value} setText={URL.setValue} />
            <Text style={styles.selectedCategoryText}>Selected Category: {chosen.name}</Text>
            <CategoriesScroll
                lowerCase
                chosen={chosen}
                setChosen={setChosen}
                containerStyle={{marginHorizontal: -10}}
                itemContainerStyle={{borderWidth: 1}}
                itemFocusContainerStyle={{borderWidth: 1, backgroundColor: '#000'}}
                itemTextStyle={{color: '#000'}}
                itemFocusTextStyle={{color: '#fff'}}
            />
            <Button
                onPressed={onAddPressed}
                containerStyle={styles.addProductContainer}
                textStyle={styles.addProductText}
                text={'Add Product'}
            />
        </SafeAreaView>
    );
};

export default CreateScreen;
