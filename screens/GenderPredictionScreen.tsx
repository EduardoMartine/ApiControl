import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';

const GenderPredictionScreen = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('#101820'); 

  const predictGender = async () => {
    try {
      const response = await fetch(`https://api.genderize.io/?name=${name}`);
      const data = await response.json();
      setGender(data.gender);

      
      if (data.gender === 'male') {
        setBackgroundColor('blue'); 
      } else if (data.gender === 'female') {
        setBackgroundColor('pink'); 
      } else {
        setBackgroundColor('#101820'); 
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <TextInput
        style={styles.input}
        placeholder="Introducir el nombre"
        value={name}
        onChangeText={setName}
      />
      <Button title="Predecir" onPress={predictGender} />
      {gender && (
        <Text style={styles.resultText}>
          Género: {gender}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 18,
  },
  resultText: {
    color: '#009f77', 
    fontSize: 20,
    marginTop: 20,
  },
});

export default GenderPredictionScreen;
