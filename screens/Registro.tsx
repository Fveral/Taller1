import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/Config';

export default function Registro({ navigation }: any) {
  const [correo, setcorreo] = useState('')
  const [contrasenia, setcontrasenia] = useState('')

  function registro() {
  createUserWithEmailAndPassword(auth, correo, contrasenia)
    .then((userCredential) => {
      const user = userCredential.user;
      Alert.alert('Registro exitoso!', 'Ahora puedes iniciar sesión.', [
        {
          text: 'OK',
          onPress: () => {
            navigation.navigate('Login');
          },
        },
      ]);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert('Error de registro')
    });
  }

  return (
      <View style={styles.container}>
      <Text style={styles.title}>Registro</Text>
      <TextInput
          placeholder='Ingrese correo'
          onChangeText={(texto) => setcorreo(texto)}
          style={styles.input}
      />
      <TextInput
          placeholder='Ingrese contrasenia'
          onChangeText={(texto) => setcontrasenia(texto)}
          style={styles.input}
      />
      <View style={styles.buttonContainer}>
          <Button title='Registro' onPress={registro}/>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f0f0f0',
      padding: 20,
      justifyContent: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      height: 50,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 8,
      paddingHorizontal: 15,
      marginBottom: 15,
      backgroundColor: '#fff',
      fontSize: 16,
    },
    buttonContainer: {
      marginTop: 10,
      borderRadius: 8,
      overflow: 'hidden',
    },
  });