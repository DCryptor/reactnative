import React from 'react';
import { Text, View } from 'react-native';
import styles from './GlobalStyles';


export default function News({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => navigation.navigate('Main')}>Перейти на главную</Text>
        </View>
    );
}

