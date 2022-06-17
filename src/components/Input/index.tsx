import React, {useState} from 'react';
import {TextInput, Text, View} from 'react-native';
import {styles} from './style';

interface Props {
    inputContainerStyle?: object;
    placeHolder: string;
    text: string;
    setText: (value: string) => void;
}

const Input = (props: Props) => {
    const [showTitle, setShowTitle] = useState(false);

    return (
        <>
            <Text style={styles.inputHeaderText}>{showTitle && props.placeHolder}</Text>
            <View style={props.inputContainerStyle}>
                <TextInput
                    style={[styles.input, props.inputContainerStyle && {borderWidth: 0}]}
                    onChangeText={props.setText}
                    value={props.text}
                    multiline={props.inputContainerStyle ? true : false}
                    placeholder={props.placeHolder}
                    placeholderTextColor={'#595c61'}
                    onFocus={() => setShowTitle(true)}
                    onBlur={() => setShowTitle(false)}
                />
            </View>
        </>
    );
};

export default Input;
