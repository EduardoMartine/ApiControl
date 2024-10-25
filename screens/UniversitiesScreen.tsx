import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList, Linking, StyleSheet } from 'react-native';

// Define una interfaz para los datos de las universidades
interface University {
  name: string;
  domains: string[];
  web_pages: string[];
}

const UniversitiesScreen = () => {
  const [country, setCountry] = useState<string>('');
  const [universities, setUniversities] = useState<University[]>([]); // Usa la interfaz aquí

  const fetchUniversities = async () => {
    try {
      const response = await fetch(`http://universities.hipolabs.com/search?country=${country}`);
      const data: University[] = await response.json(); // Especifica el tipo de datos esperados
      setUniversities(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el país"
        value={country}
        onChangeText={setCountry}
      />
      <Button title="Buscar" onPress={fetchUniversities} />
      <FlatList
        data={universities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.university}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.domain}>Dominio: {item.domains[0]}</Text>
            <Text style={styles.link} onPress={() => Linking.openURL(item.web_pages[0])}>
              Visitar sitio web
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#101820', // Fondo oscuro
  },
  input: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  university: {
    marginBottom: 15,
    backgroundColor: '#1D1F22', // Fondo para cada universidad
    padding: 10,
    borderRadius: 8,
  },
  name: {
    fontWeight: 'bold',
    color: '#009f77', // Color del nombre de la universidad
  },
  domain: {
    color: '#66CDAA', // Verde más claro para el dominio
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default UniversitiesScreen;
