// src/screens/RegisterScreen.js
import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import { firebase } from '../firebaseConfig';

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = () => {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Registro bem-sucedido
        const user = userCredential.user;
        console.log('Usuário registrado:', user);
        navigation.navigate('Login');
      })
      .catch((error) => {
        // Handle Errors here.
        const errorMessage = error.message;
        console.error('Erro ao registrar:', errorMessage);
      });
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Registrar" onPress={registerUser} />
      <Button title="Já tem uma conta? Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterScreen;
