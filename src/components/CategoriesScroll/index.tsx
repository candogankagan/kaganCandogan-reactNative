import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, ScrollView} from 'react-native';
import {styles} from './style';
import {fetchService} from '../../utils/fetchService';

interface Props {
    all?: boolean;
    lowerCase?: boolean;
    containerStyle?: object;
    itemContainerStyle?: object;
    itemFocusContainerStyle?: object;
    itemTextStyle?: object;
    itemFocusTextStyle?: object;
    chosen: {itemId: string | number; name: string};
    setChosen: any;
}

interface CategoryType {
    createdAt: string;
    id: string;
    name: string;
}

const CategoriesScroll = (props: Props) => {
    const [categories, setCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        fetchService('categories/', 'GET')
            .then((response: any) => {
                setCategories([
                    {
                        createdAt: '2022-02-14T18:27:19.838Z',
                        id: '0',
                        name: 'All',
                    },
                    ...response,
                ]);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    const onItemPressed = (id: any) => {
        props.setChosen({itemId: id, name: categories[id].name});
    };

    return (
        <View style={props.containerStyle}>
            <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
                {categories.map((item, index) => {
                    if (props.all ? true : index > 0) {
                        return (
                            <TouchableOpacity
                                onPress={() => onItemPressed(item.id)}
                                key={item.id}
                                activeOpacity={0.6}
                                style={[
                                    styles.itemContainer,
                                    props.chosen?.itemId == index
                                        ? props.itemFocusContainerStyle
                                        : props.itemContainerStyle,
                                ]}>
                                <Text
                                    style={[
                                        styles.itemText,
                                        props.chosen?.itemId == index ? props.itemFocusTextStyle : props.itemTextStyle,
                                    ]}>
                                    {props.lowerCase ? item.name.toLowerCase() : item.name}
                                </Text>
                            </TouchableOpacity>
                        );
                    }
                })}
            </ScrollView>
        </View>
    );
};

export default CategoriesScroll;
