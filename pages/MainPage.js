import React from 'react';
import { Text, SafeAreaView, StyleSheet, Button, ImageBackground, View } from 'react-native';
import { supabase } from '../Utils/supabase';
import UVv_Campus from '../assets/UVv_Campus.jpg';

export default function MainPage({ navigation }) {
  return (
    <ImageBackground style={styles.background} source={UVv_Campus}>
      <SafeAreaView style={styles.container}>
        
        <View style={styles.createGroupButton}>
          <Button
            title="Criar Grupo"
            color="#021E73"
            onPress={() => navigation.navigate('CreateGroup')}
          />
        </View>

        {/* Aqui você pode implementar a visualização dos grupos */}
        <View style={styles.viewGroupsContainer}>
          <Text style={styles.text}>Aqui estarão os grupos.</Text>
          {/* Adicione a lógica para listar os grupos aqui, por exemplo, usando dados do supabase */}
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30, 
  },
  createGroupButton: {
    position: 'absolute', 
    top: 20,
    left: 20,
    width: '50%', 
  },
  viewGroupsContainer: {
    marginTop: 100, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#021E73',
    marginBottom: 20,
  },
});
