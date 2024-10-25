import React from 'react'; 
import { View, Text, Image, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/fotoperfil.png')} style={styles.image} />
      <Text style={styles.name}>Eduardo Martinez</Text>
      <Text style={styles.contact}>Correo: martinez.eduardo.dev@gmail.com</Text>
      <Text style={styles.contact}>Teléfono: +1 849-387-2968</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F0F4F8', 
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 20,
    borderWidth: 2, 
    borderColor: '#007BFF', 
  },
  name: {
    fontSize: 24, 
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#007BFF', 
  },
  contact: {
    fontSize: 17, 
    marginBottom: 5,
    color: '#333', 
  },
});

export default AboutScreen;
