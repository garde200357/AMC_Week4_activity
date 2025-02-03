import React, {useState} from 'react';
import {
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

type ItemData = {
  id: string;
  title: string;
};

const DATA: ItemData[] = [
   {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'eat breakfast',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'go bathroom',
  },
  {
    id: '58694a0f-3da1-471f-bd96-141571e29d72',
    title: 'change clothes',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145574e29d72',
    title: 'open my phone ',
  },
  {
    id: '58694a0f-3da1-471f-bd96-115571e29d72',
    title: 'prepare to go to school',
  },{
    id: '58694a0f-3da1-471f-bd96-145551e29d72',
    title: 'take a jeep to go to school',
  },{
    id: '58694a0f-3da1-471f-bd96-145575e29d72',
    title: 'study',
  },{
    id: '58694a0f-3da1-471f-bd96-147571e29d72',
    title: 'then take a jeep to home',
  },{
    id: '58694a0f-3da1-471f-bd96-145572e29d72',
    title: 'eat lunch',
  },{
    id: '58694a0f-3da1-471f-bd96-145471e29d72',
    title: 'watch tv',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29672',
    title: 'open social media',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e49d72',
    title: 'watch some video in youtube',
  },{
    id: '58694a0f-3da1-471f-bd96-147571e29d72',
    title: 'read a novel',
  },{
    id: '58694a0f-3da1-471f-bd96-141571e29d72',
    title: 'have a coffee break ',
  },{
    id: '58694a0f-3da1-471f-bd96-145521e29d72',
    title: 'buy some snacks',
  },{
    id: '58694a0f-3da1-471f-bd96-145171e29d72',
    title: 'watch the tv ',
  },{
    id: '58694a0f-3da1-471f-bd96-141571e29d72',
    title: 'take the dishes',
  },{
    id: '58694a0f-3da1-471f-bd96-14571e29d722',
    title: 'cook rice',
  },{
    id: '58694a0f-3da1-471f-bd96-145571e29d82',
    title: 'go to grocerie',
  },{
    id: '58194a0f-3da1-471f-bd96-145571e29d72',
    title: 'go home ',
  },{
    id: '55694a0f-3da1-471f-bd96-145571e29d72',
    title: 'watch some anime',
  },
  {
    id: '58654a0f-3da1-471f-bd96-145571e29d72',
    title: 'eat diner',
  },{
    id: '58694a0f-3da1-471f-bd76-145571e29d72',
    title: 'take a bath',
  },{
    id: '58694a0f-3da1-471f-bd96-245571e29d72',
    title: 'read a novel',
  },{
    id: '58594a0f-3da1-471f-bd96-145571e29d72',
    title: 'sleep',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor: string;
};
const COLORS = ['#f9c2ff','#a0d5ff','#c0ffb7','#ffc0cb','#ffe4e1'];
const Item = ({item, onPress, backgroundColor, textColor}: ItemProps) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, {backgroundColor}]}>
    <Text style={[styles.title, {color: textColor}]}>{item.title}</Text>
  </TouchableOpacity>
);

const App = () => {
  const [selectedId, setSelectedId] = useState<string>();

  const renderItem = ({item, index}) => {
    const backgroundColor = item.id === selectedId ? '#a0d5ff' : COLORS[index % COLORS.length];
    const color = item.id === selectedId ? 'white' : 'black';

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id)}
        backgroundColor={backgroundColor}
        textColor={color}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          extraData={selectedId}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;