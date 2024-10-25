import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // Para usar los íconos, asegúrate de instalar 'expo-vector-icons'

const WeatherScreen = () => {
  const [weather, setWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo&appid=dfc0ff3d99d8f331605252352d0cd0a4&units=metric`
        );
        const data = await response.json();

        if (response.ok) {
          setWeather(data);
        } else {
          setError('Error fetching weather data');
        }
      } catch (error) {
        console.error(error);
        setError('Error fetching weather data');
      }
    };

    fetchWeather();
  }, []);

  const capitalize = (str: string): string => str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <View style={styles.container}>
      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : weather ? (
        <View style={styles.weatherContainer}>
          <Text style={styles.title}>🌍 Clima en {weather.name}</Text>
          <FontAwesome5 name="cloud" size={80} color="#00CFFF" style={styles.icon} />
          
          <Text style={styles.temperature}>{weather.main.temp}°C</Text>
          <Text style={styles.description}>{capitalize(weather.weather[0].description)}</Text>
          
          <View style={styles.detailsContainer}>
            <Text style={styles.detailText}>💧 Humedad: {weather.main.humidity}%</Text>
            <Text style={styles.detailText}>🌡 Presión: {weather.main.pressure} hPa</Text>
            <Text style={styles.detailText}>🔼 Máx: {weather.main.temp_max}°C</Text>
            <Text style={styles.detailText}>🔽 Mín: {weather.main.temp_min}°C</Text>
          </View>
        </View>
      ) : (
        <Text style={styles.loadingText}>Cargando datos del clima...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101820', // Fondo oscuro
  },
  weatherContainer: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: '#00CFFF', // Color turquesa
    fontWeight: 'bold',
    marginBottom: 10,
  },
  icon: {
    marginBottom: 20,
  },
  temperature: {
    fontSize: 48,
    color: '#00CFFF',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 18,
    color: '#FFFFFF',
    fontStyle: 'italic',
    marginVertical: 8,
  },
  detailsContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  detailText: {
    fontSize: 16,
    color: '#00CFFF',
    marginVertical: 4,
  },
  loadingText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  errorText: {
    fontSize: 18,
    color: 'red',
  },
});

export default WeatherScreen;
