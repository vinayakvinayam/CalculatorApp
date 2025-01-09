
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handlePress = (value: string) => {
        setResult(value)
    }

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                <Text style={styles.headingText}>
                    Enter Input Below
                </Text>
                <TextInput
                    value={input}
                    style={styles.inputBox}
                    onChangeText={(text) => setInput(text)}
                />
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() =>handlePress(input)}
                >
                    <Text style={styles.buttonText}>Result</Text>
                </TouchableOpacity>
                <Text style={styles.headingText}>
                   Result : {result}
                </Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    display: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8174A0',
        padding: 20,
    },
    headingText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#441752",
        marginTop: 20
    },
    inputBox: {
        height: 50,
        width: "70%",
        borderWidth: 1,
        borderColor: "#AAB99A",
        borderRadius: 5,
        marginTop: 6,
        fontSize: 26
    },
    inputText: {
        fontSize: 32,
        color: '#333',
    },
    buttonContainer: {
        marginTop: 15,
        width: "60%",
        height: 40,
        borderRadius: 5,
        backgroundColor: "#EFB6C8",
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "bold"
    },
    resultText: {
        fontSize: 24,
        color: '#666',
        marginTop: 10,
    },
});

export default Calculator;
