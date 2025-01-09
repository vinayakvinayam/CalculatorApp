
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

const Calculator = () => {
    const [input, setInput] = useState<string>('');
    const [result, setResult] = useState<number>(0);
    const [error, setError] = useState<string>('');

    const handlePress = (value: string) => {
        setError("")
        let result = 0
        if (!value) {
            setResult(result)
        } else {
            let delimiter = /,|\n/;
            let numbersString = value;

            if (value.startsWith("//")) {
                const delimiterMatch = value.match(/^\/\/(.+)\n/);
                if (delimiterMatch) {
                    delimiter = new RegExp(delimiterMatch[1]);
                    numbersString = value.split("\n").slice(1).join("\n");
                }
            }

            const numbers = numbersString.split(delimiter).map((num) => parseInt(num, 10));

            const negatives = numbers.filter((num) => num < 0);
            if (negatives.length > 0) {
                setError("Negative numbers not allowed")
            }

            result = numbers.reduce((sum, num) => sum + (isNaN(num) ? NaN : num), 0);
            setResult(result)
        }




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
                    onPress={() => handlePress(input)}
                >
                    <Text style={styles.buttonText}>Result</Text>
                </TouchableOpacity>

                {
                    error ? (
                        <Text style={styles.headingText}>
                            Error : {error}
                        </Text>
                    ) : (
                        <Text style={styles.headingText}>
                            Result : {result}
                        </Text>
                    )
                }

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
