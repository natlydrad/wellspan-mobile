// screens/StartScreen.js

/*
import React from 'react';
import { View, Text } from 'react-native';

export default function StartScreen() {
  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}
*/



import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function StartScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>WellSpan</Text>
      <Text style={styles.subtitle}>Your Quality of Life Expectancy Calculator</Text>
      <Button title="Start Now" onPress={() => navigation.navigate('Form')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 32, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, textAlign: 'center', marginBottom: 20 },
});