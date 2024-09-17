// screens/OptionsScreen.js
import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const OPTIONS_DATA = [
  { id: '1', title: 'Configuraciones en el Perfil' },
  { id: '2', title: 'Configuraciones de Privacidad' },
  { id: '3', title: 'Notificaciones de Preferencia' },
  { id: '4', title: 'Tema App' },
  { id: '5', title: 'Ayuda y Soporte' },
  { id: '6', title: 'Acerca de' },
];


const OptionsScreen = () => {
  const renderItem = ({ item }) => (

    <TouchableOpacity style={styles.option}>
      <Text style={styles.optionText}>{item.title}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={OPTIONS_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  option: {
    padding: 25,
    marginVertical: 5,
    borderBottomWidth: 2,
    borderBottomColor: '#ddd',
  },
  optionText: {
    fontSize: 20,
  },
});

export default OptionsScreen;
