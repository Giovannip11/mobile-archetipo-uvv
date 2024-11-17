import React, { useEffect, useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View, Alert, ImageBackground, TouchableOpacity } from 'react-native';
import { supabase } from '../Utils/supabase';
import UVv_Campus from '../assets/UVv_Campus.jpg';

export default function Main({ navigation }) {
  const [groups, setGroups] = useState([]);

  // Função para buscar todos os grupos e seus integrantes
  const fetchGroups = async () => {
    try {
      const { data, error } = await supabase
        .from('gruposInova')
        .select(`
          id,
          tema,
          diasApresentacao,
          integrantes,
          IntegrantesGrupo (
            id,
            Alunos:Alunos (
              nome,
              curso
            )
          )
        `);
  
      if (error) {
        console.error('Erro ao buscar grupos:', error.message);
        Alert.alert('Erro', 'Não foi possível buscar os grupos.');
        return;
      }
  
      setGroups(data);
    } catch (error) {
      console.error('Erro inesperado:', error);
      Alert.alert('Erro', 'Ocorreu um erro inesperado. Tente novamente.');
    }
  };
  

  // Buscar grupos ao carregar a tela
  useEffect(() => {
    fetchGroups();
  }, []);

  // Renderizar cada grupo e seus integrantes
  const renderItem = ({ item }) => (
    <View style={styles.groupContainer}>
      <Text style={styles.groupName}>Tema: {item.tema}</Text>
      <Text>Data de Apresentação: {item.diasApresentacao}</Text>
      <Text style={styles.subTitle}>Integrantes:</Text>
      {item.IntegrantesGrupo && item.IntegrantesGrupo.map((integrante, index) => (
        <View key={index} style={styles.memberContainer}>
          <Text style={styles.memberName}>Nome: {integrante.Alunos.nome}</Text>
          <Text style={styles.memberCourse}>Curso: {integrante.Alunos.curso}</Text>
        </View>
      ))}
    </View>
  );

  return (
    <ImageBackground source={UVv_Campus} style={styles.background}>
      <SafeAreaView style={styles.container}>
        {/* Botão para criar grupo */}
        <TouchableOpacity style={styles.createButton} onPress={() => navigation.navigate('Create')}>
          <Text style={styles.buttonText}>Criar Grupo</Text>
        </TouchableOpacity>

        <FlatList
          data={groups}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgba(0,0,0,0.5)', // Fundo semi-transparente
  },
  groupContainer: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 3,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#021E73',
  },
  subTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  memberContainer: {
    marginTop: 5,
    paddingLeft: 10,
  },
  memberName: {
    fontSize: 16,
    color: '#555',
  },
  memberCourse: {
    fontSize: 14,
    color: '#888',
  },
  createButton: {
    backgroundColor: '#34C759',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
