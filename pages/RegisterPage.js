import React from 'react';
import { Text, SafeAreaView, StyleSheet, Button, ImageBackground, View, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import UVv_Campus from '../assets/UVv_Campus.jpg'; 

export default function RegisterPage({ navigation }) {
  return (
    <ImageBackground style={styles.background} source={UVv_Campus}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.paragraph}>Register</Text>
        <Card>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            secureTextEntry
          />
        </Card>
        
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button 
              title="Criar Conta" 
              color="#021E73" 
              onPress={() => navigation.navigate('Main')} 
            />
          </View>
          
          
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  container: {
    width: '80%',
    maxWidth: 400,
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    marginVertical: 10,
    width: '50%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});


