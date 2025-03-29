// screens/ResultScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

export default function ResultScreen({ navigation, route }) {
  const { results, age } = route.params;

  console.log('📊 Mobile received forecast:', results.qolForecast);

  // Dummy data
  const labels = Array.from({ length: 10 }, (_, i) => (age + i * 4).toString());

  const userData = results.qolForecast.slice(0, 50);
  const averageData = userData.map(val => val - 20); // dummy
  const idealData = userData.map(val => val + 5);     // dummy

  const chartData = {
    labels,
    datasets: [
      {
        data: userData,
        strokeWidth: 2,
        color: () => 'blue',
        label: 'You',
      },
      {
        data: averageData,
        strokeWidth: 2,
        color: () => 'red',
        label: 'Average American',
      },
      {
        data: idealData,
        strokeWidth: 2,
        color: () => 'green',
        label: 'Ideal',
      },
    ],
    legend: ['You', 'Average American', 'Ideal'],
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Results</Text>

      <Text style={styles.label}>
        Life Expectancy: <Text style={styles.result}>{results.lifeExpectancy}</Text>
      </Text>
      <Text style={styles.label}>
        Quality of Life: <Text style={styles.result}>{results.qualityOfLife}</Text>
      </Text>

      <Text style={styles.note}>
        Compared to the <Text style={{ color: 'red' }}>Average American</Text> and the <Text style={{ color: 'green' }}>Ideal</Text> lifestyle.
      </Text>

      <Button title="Start Over" onPress={() => navigation.navigate('Start')} />

      <Text style={styles.graphTitle}>Quality of Life Over Time</Text>
      <LineChart
        data={chartData}
        width={Dimensions.get('window').width - 40}
        height={220}
        yAxisSuffix="%"
        yAxisInterval={1}
        chartConfig={{
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          labelColor: () => '#666',
          propsForDots: {
            r: '2',
            strokeWidth: '1',
            stroke: '#000',
          },
        }}
        bezier
        style={styles.chart}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', gap: 12 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  label: { fontSize: 16 },
  result: { fontSize: 20, color: 'blue' },
  note: { fontStyle: 'italic', color: '#666', textAlign: 'center', marginVertical: 20 },
  chart: { marginTop: 24, borderRadius: 8 },
  graphTitle: { fontSize: 18, fontWeight: 'bold', marginTop: 30, marginBottom: 10 },
});




/*
import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

export default function ResultScreen({ navigation, route }) {
  const { results, age } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Your Results</Text>

      <Text style={styles.label}>Life Expectancy: <Text style={styles.result}>{results.lifeExpectancy}</Text></Text>
      <Text style={styles.label}>Quality of Life: <Text style={styles.result}>{results.qualityOfLife}</Text></Text>

      <Text style={styles.note}>
        Compared to the Average American and the Ideal lifestyle.
      </Text>

      <Button title="Start Over" onPress={() => navigation.navigate('Start')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center', gap: 12 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  label: { fontSize: 16 },
  result: { fontSize: 20, color: 'blue' },
  note: { fontStyle: 'italic', color: '#666', textAlign: 'center', marginVertical: 20 },
});
*/