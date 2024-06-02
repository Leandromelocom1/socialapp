// src/screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { firebase } from '../firebaseConfig';

const HomeScreen = ({ navigation }) => {
  const logoutUser = () => {
    firebase.auth().signOut()
      .then(() => {
        console.log('Usuário deslogado');
        navigation.navigate('Login');
      })
      .catch((error) => {
        console.error('Erro ao deslogar:', error);
      });
  };

  return (
    <View>
      <Text>Bem-vindo à Home!</Text>
      <Button title="Logout" onPress={logoutUser} />
    </View>
  );
};

export default HomeScreen;
