import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const TextScreen = () => {
    const [name, setName] = useState('');

    <View>
    <Text>Enter Name:</Text>
        <TextInput 
        style={styles.input} 
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newText) => setName(newText)}
        />
        <Text>My name is: {name}</Text>
        {name.length < 4 ? <Text>Name must be atleast 4 characters</Text> : null}
    </View>
}

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;