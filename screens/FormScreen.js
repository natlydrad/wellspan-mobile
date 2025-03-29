// screens/FormScreen.js

import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform
} from 'react-native';

import Slider from '@react-native-community/slider';

export default function FormScreen({ navigation }) {
  const [formData, setFormData] = useState({
    age: '22',
    height: '65',
    weight: '145',
    sex: 'F',
    fruitsVeg: 6,
    activity: 'Moderate',
    smoking: 'Never',
    alcohol: 'None',
    sleep: 'Fair',
    stress: 3,
    hasBestFriend: 'Y',
  });

  const handleChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  function handleSubmit() {
    fetch('https://wellspan-backend.onrender.com/calculate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData), // send the full object
    })
      .then(res => res.json())
      .then(data => {
        navigation.navigate('Results', {
          results: data,
          age: parseInt(formData.age, 10),
        });
      })
      .catch(err => {
        console.error('API Error:', err);
        alert('Something went wrong. Please try again.');
      });
  }
  

  /*
  function handleSubmit() {
    const results = {
      lifeExpectancy: 83,
      qualityOfLife: 64,
      qolForecast: Array.from({ length: 50 }, (_, i) => 70 - i * 0.6),
    };
    navigation.navigate('Results', {
      results,
      age: parseInt(formData.age, 10),
    });
  }
  */

  const RadioGroup = ({ name, options }) => (
    <View style={styles.radioGroup}>
      {options.map((value) => (
        <TouchableOpacity
          key={value}
          style={styles.radioOption}
          onPress={() => handleChange(name, value)}
        >
          <View style={[styles.radioCircle, formData[name] === value && styles.selectedCircle]} />
          <Text>{value}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lifestyle Forecast</Text>

      {/* Basic Inputs */}
      <Text>Age</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={formData.age} onChangeText={(val) => handleChange('age', val)} />

      <Text>Height (in)</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={formData.height} onChangeText={(val) => handleChange('height', val)} />

      <Text>Weight (lbs)</Text>
      <TextInput style={styles.input} keyboardType="numeric" value={formData.weight} onChangeText={(val) => handleChange('weight', val)} />

      {/* Sex */}
      <Text style={styles.label}>Sex</Text>
      <RadioGroup name="sex" options={['F', 'M']} />

      {/* Fruits/Veg Slider */}
      <Text style={styles.label}>Fruits/Veg Per Day: {formData.fruitsVeg}</Text>
      <Slider
        minimumValue={0}
        maximumValue={7}
        step={1}
        value={formData.fruitsVeg}
        onValueChange={(val) => handleChange('fruitsVeg', val)}
      />

      {/* Radio Groups */}
      {[
        { name: 'activity', label: 'Physical Activity Level', options: ['Sedentary', 'Moderate', 'Vigorous'] },
        { name: 'smoking', label: 'Smoking Status', options: ['Current', 'Former', 'Never'] },
        { name: 'alcohol', label: 'Alcohol Use', options: ['None', 'Moderate', 'Heavy'] },
        { name: 'sleep', label: 'Sleep Quality', options: ['Poor', 'Fair', 'Good'] },
      ].map(({ name, label, options }) => (
        <View key={name}>
          <Text style={styles.label}>{label}</Text>
          <RadioGroup name={name} options={options} />
        </View>
      ))}

      {/* Stress */}
      <Text style={styles.label}>Stress Level: {formData.stress}</Text>
      <Slider
        minimumValue={1}
        maximumValue={5}
        step={1}
        value={formData.stress}
        onValueChange={(val) => handleChange('stress', val)}
      />

      {/* Best Friend */}
      <Text style={styles.label}>Do you have a best friend?</Text>
      <RadioGroup name="hasBestFriend" options={['Y', 'N']} />

      <View style={{ marginTop: 20 }}>
        <Button title="Calculate" onPress={handleSubmit} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingBottom: 60 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
  label: {
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 5,
  },
  radioGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginVertical: 5,
  },
  radioCircle: {
    height: 14,
    width: 14,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: '#000',
    marginRight: 6,
  },
  selectedCircle: {
    backgroundColor: '#000',
  },
});




/*
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView } from 'react-native';

export default function FormScreen({ navigation }) {
  const [age, setAge] = useState('22');
  const [stress, setStress] = useState('3');

  function handleSubmit() {
    const results = {
      lifeExpectancy: 83,
      qualityOfLife: 64,
      qolForecast: Array.from({ length: 50 }, (_, i) => 70 - i * 0.6),
    };
    navigation.navigate('Results', { results, age: parseInt(age, 10) });
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Lifestyle Forecast</Text>

      <Text>Age</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />

      <Text>Stress Level (1-5)</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={stress}
        onChangeText={setStress}
      />

      <Button title="Calculate" onPress={handleSubmit} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginVertical: 10,
    borderRadius: 5,
  },
});
*/
