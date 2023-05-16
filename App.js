import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Buttons from './components/Buttons';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Image style={styles.imagem} source={require('./assets/img/logo5.png')}/>
      <Image style={styles.img} source={require('./assets/img/logoIdeia.png')}/>
      <View>
      <LinearGradient
        // Background Linear Gradient
        colors={['#046D1B', '#C2FF00']}
        style={styles.background}
      />
      <LinearGradient
        // Button Linear Gradient
        colors={['#046D1B', '#C2FF00']}
        style={styles.background}>
          <Text></Text>
      </LinearGradient>
      <Buttons />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    colors: '',
  },
  div:{
    width:'50%',
    height: '50%',
  },
  oi:{
    width: 210,
    height: 60,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 15,

  },
  imagem:{
    position: 'absolute',
    top: 200,
    height: 50,
    width: '100%',
    zIndex: 99,
  },
  background:{
    height:'100%',
  },
  img:{
    position: 'absolute',
    bottom: '45%',
    height: 240,
    width: '100%',
    zIndex: 99,
  },

});
