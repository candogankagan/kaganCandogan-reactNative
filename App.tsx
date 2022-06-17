import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ApplicationNavigator} from './src/navigators/application.navigator';

const App = () => {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <ApplicationNavigator />
            </NavigationContainer>
        </SafeAreaProvider>
    );
};

export default App;
