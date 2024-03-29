// import {useState, useEffect} from 'react';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import ApiBtc from './components/ApiBtc';
import Post from './components/Post';
import Pokedex from './components/Pokedex';


export default function App() {

  return (
    <View style={styles.container}>

      <Pokedex />
      <StatusBar style="auto" />
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
});
