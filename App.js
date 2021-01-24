import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import carItem from './components/CarItem'
export default function App() {
  return (
    <View style={styles.container}>
      <carItem />
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

  carContainer: {
    width: '100%',
    height: '100%'
  },

  titles: {
    marginTop: '30%',
    width: '100%',
    alignItems: 'center'
  },

  title: {
    fontSize: 40,
    fontWeight: 'bold'
  },

  subTitles: {
    fontSize: 16,
    color: '#ddd'
  },

  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute"
  }
});
