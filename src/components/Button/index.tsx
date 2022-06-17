import {Text, TouchableOpacity} from 'react-native';
import React from 'react';

interface Props {
    onPressed: () => void;
    containerStyle: object;
    textStyle: object;
    text: string;
}

const Button = (props: Props) => {
    return (
        <TouchableOpacity onPress={props.onPressed} style={props.containerStyle}>
            <Text style={props.textStyle}>{props.text}</Text>
        </TouchableOpacity>
    );
};

export default Button;
