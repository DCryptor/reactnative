import React from 'react';
import Main from './screens/Main';
import News from './screens/News';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
                name='Main'
                component={Main}
                options={{ title: 'Главная' }}
            />
            <Stack.Screen
                name='News'
                component={News}
                options={{ title: 'Новости' }}
            />
        </Stack.Navigator>
    </NavigationContainer>
}