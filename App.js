import * as React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Buttons from './components/Buttons';
import bg from './assets/img/bg.png'
import Home from './components/Home';
import Routes from './Routes';

export default function App() {
  return (
    <Routes />
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
  bgStyle:{
    flex: 1,
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
