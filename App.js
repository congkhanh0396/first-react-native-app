import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import CarsList from './components/CarsList';
import Header from './components/Header'
export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <CarsList/>
      {/* <CarItem name={"Model X"} taggLine={"Order online for"} TagLineCTA={"Touchless Delivery"} image={require('./assets/images/ModelX.jpeg')}/> */}
      {/* <CarItem name={"Model Y"} taggLine={"Starting from $233344"} image={require('./assets/images/ModelY.jpeg')}/>
      <CarItem name={"Model S"} taggLine={"Starting from $66,000"} image={require('./assets/images/ModelS.jpeg')}/> */}
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
