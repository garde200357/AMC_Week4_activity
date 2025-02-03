import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'eat breakfast',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'go bathroom',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'change clothes',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'open my phone ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'prepare to go to school',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'take a jeep to go to school',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'study',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'then take a jeep to home',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'eat lunch',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'watch tv',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'open social media',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'watch some video in youtube',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'read a novel',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'have a coffee break ',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'buy some snacks',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'watch the tv ',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'take the dishes',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'cook rice',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'go to grocerie',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'go home ',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'watch some anime',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'eat diner',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'take a bath',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'read a novel',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'sleep',
  },
];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
  <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
    <SafeAreaView style={styles.container}>
    
      <FlatList
        
        data={DATA}
        
       const renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
           
      />
    </SafeAreaView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;