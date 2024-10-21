import React, { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, Button, ImageBackground, View, TextInput } from 'react-native';

import UVv_Campus from '../assets/UVv_Campus.jpg'; 

export default function ForgetPassword() {
  const [email, setEmail] = useState('');

  return (
    <ImageBackground style={styles.background} source={UVv_Campus}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Esqueci minha Senha</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Button title="Enviar Email de Redefinição" color="#023373" onPress={() => {  }} />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:'100%'
  },
  container: {
    width: '100%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
