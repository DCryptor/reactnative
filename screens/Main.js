import React from 'react';
import { Text, View , FlatList} from 'react-native';
import styles from './GlobalStyles';


const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Петр Николаев',
    song: 'Булчут ырыата',
  },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Георгий Ушницкий',
    song: 'До5отторум',
  },
    {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Гоша Васильев',
    song: 'Тургутуу',
  },
];

const Item = ({title, song}) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{song}</Text>
  </View>
);

export default function Main({ navigation }) {
    
    return (
        <View style={styles.container}>
                  <FlatList
        data={DATA}
        renderItem={({item}) => 
        <View style={[styles.container, {width:'100%', height: 52, backgroundColor: '#f6f6f6', marginBottom: 10,}]}>
            <Item title={item.title} />
            <Item title={item.song} />
        </View>}
        keyExtractor={item => item.id}
      />
            <Text style={styles.text} onPress={() => navigation.navigate('News')}>Перейти на новости</Text>
        </View>
    );
}

