import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({

    carContainer: {
        width: '100%',
        height: Dimensions.get('window').height,
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
        color: 'gray'
      },
    
      image: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        position: "absolute"
      }, 
      ButtonContainer: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
      },
      TagLineCTA:{
        textDecorationLine: 'underline'
      }
});

export default styles;