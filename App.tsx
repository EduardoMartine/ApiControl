import React from 'react';
import { View, Button, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome'; // Para los iconos
import GenderPredictionScreen from './screens/GenderPredictionScreen';
import AgePredictionScreen from './screens/AgePredictionScreen';
import UniversitiesScreen from './screens/UniversitiesScreen';
import WeatherScreen from './screens/WeatherScreen';
import WordPressNewsScreen from './screens/WordPressNewsScreen';
import AboutScreen from './screens/AboutScreen';

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2726/2726805.png' }}
        style={styles.image}
      />

      {/* Botón para Predecir Género */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Predicion Genero')}
      >
        <Icon name="venus-mars" size={20} color="#fff" />
        <Text style={styles.buttonText}>Predecir Género</Text>
      </TouchableOpacity>

      {/* Botón para Predecir Edad */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Predicion Edad')}
      >
        <Icon name="calendar" size={20} color="#fff" />
        <Text style={styles.buttonText}>Predecir Edad</Text>
      </TouchableOpacity>

      {/* Botón para Universidades */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Universidades')}
      >
        <Icon name="university" size={20} color="#fff" />
        <Text style={styles.buttonText}>Universidades</Text>
      </TouchableOpacity>

      {/* Botón para Clima */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Clima')}
      >
        <Icon name="cloud" size={20} color="#fff" />
        <Text style={styles.buttonText}>Clima de RD</Text>
      </TouchableOpacity>

      {/* Botón para Noticias */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('WordPress Noticias')}
      >
        <Icon name="newspaper-o" size={20} color="#fff" />
        <Text style={styles.buttonText}>WordPress Noticias</Text>
      </TouchableOpacity>

      {/* Botón para Contacto */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Sobre mi')}
      >
        <Icon name="user" size={20} color="#fff" />
        <Text style={styles.buttonText}>Contáctame</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Predicion Genero" component={GenderPredictionScreen} />
        <Stack.Screen name="Predicion Edad" component={AgePredictionScreen} />
        <Stack.Screen name="Universidades" component={UniversitiesScreen} />
        <Stack.Screen name="Clima" component={WeatherScreen} />
        <Stack.Screen name="WordPress Noticias" component={WordPressNewsScreen} />
        <Stack.Screen name="Sobre mi" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101820',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E90FF',
    padding: 15,
    marginVertical: 10,
    width: '80%',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    marginLeft: 10,
  },
});

export default App;
