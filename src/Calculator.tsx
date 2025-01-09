
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value: string) => {
    if (value === '=') {
      try {
        const evalResult = eval(input); // Avoid using eval in production for security reasons
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.inputText}>{input}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.keypad}>
        {[
          ['7', '8', '9', '/'],
          ['4', '5', '6', '*'],
          ['1', '2', '3', '-'],
          ['C', '0', '=', '+'],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((key) => (
              <TouchableOpacity
                key={key}
                style={styles.button}
                onPress={() => handlePress(key)}
              >
                <Text style={styles.buttonText}>{key}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
  },
  display: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    padding: 20,
  },
  inputText: {
    fontSize: 32,
    color: '#333',
  },
  resultText: {
    fontSize: 24,
    color: '#666',
    marginTop: 10,
  },
  keypad: {
    flex: 2,
    backgroundColor: '#ddd',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  button: {
    backgroundColor: '#fff',
    padding: 20,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    elevation: 2,
  },
  buttonText: {
    fontSize: 24,
    color: '#333',
  },
});

export default Calculator;
