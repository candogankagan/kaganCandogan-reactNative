import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import CreateScreen from '../screens/CreateScreen';

export type RootStackParamList = {
    Home: undefined;
    Detail: {itemId: number};
    Create: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const ApplicationNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Detail" component={DetailScreen} />
            <Stack.Screen name="Create" component={CreateScreen} />
        </Stack.Navigator>
    );
};
