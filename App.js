import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [name, setName] = useState('Partha')
  const clickHandler = () => {
    setName('Chun-Li')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.boldText}>Welcome to Chinmaya Mission Yamunotri</Text>
      </View>
      <View style={styles.body}>
        <Text>My Name is {name} <Text style={styles.boldText}>dolor</Text> sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <Text>Lorem ipsum dolor sit amet.</Text>
        <View style = {styles.buttonContainer}>
          <Button title = 'update my name' onPress={clickHandler}/>
        </View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    marginTop: 20
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
  },
  body: {
    backgroundColor: 'yellow',
    padding: 20,
  },
  boldText: {
    fontWeight: 'bold',
  }
});


