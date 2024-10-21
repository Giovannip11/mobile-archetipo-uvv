import React from 'react';
import { Text, SafeAreaView, StyleSheet, Button, ImageBackground, View } from 'react-native';
import { Card as PaperCard } from 'react-native-paper'; 
import AssetExample from '../components/AssetExample';

import { info } from '../data/dados';
import Card from '../components/Card'; 


import UVv_Campus from '../assets/UVv_Campus.jpg'; 

export default function MainPage() {
  return (
    <ImageBackground style={styles.background} source={UVv_Campus}>
      <SafeAreaView style={styles.container}>
        <View>
          {
            info.map(x => <Card key={x.id} elemento={x}/>) 
          }
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});
