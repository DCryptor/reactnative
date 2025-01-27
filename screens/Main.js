import React from 'react';
import { Text, View } from 'react-native';
import styles from './GlobalStyles';


export default function Main({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text} onPress={() => navigation.navigate('News')}>Перейти на новости</Text>
        </View>
    );
}

