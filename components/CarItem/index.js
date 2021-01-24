import React from 'react';
import {View, Text} from 'react-native';
import style from './style'
const CarItem = (props) =>{
    return(
        <View style={styles.carContainer}>
        <ImageBackground source={require('../../assets/images/ModelX.jpeg')} style={styles.image}/>
       <View style={styles.titles}>
         <Text style={styles.title}>Model S</Text>
         <Text style={styles.subTitles}>Starting with $69,000</Text>
       </View>
      </View>
    )
}

export default CarItem;