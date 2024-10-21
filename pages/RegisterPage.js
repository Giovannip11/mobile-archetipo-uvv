import React from 'react';
import { Text, SafeAreaView, StyleSheet, ImageBackground, View } from 'react-native';

 import { Card } from 'react-native-paper'; 
 import AssetExample from '../components/AssetExample';
import UVv_Campus from '../assets/UVv_Campus.jpg'; 

export default function RegisterPage() {
  return (
    <ImageBackground style={styles.background} source={UVv_Campus}>
      <SafeAreaView style={styles.container}>
        <View>
          <Text>Texto Exemplo</Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width:'100%',
    height:'100%'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
  },
});
