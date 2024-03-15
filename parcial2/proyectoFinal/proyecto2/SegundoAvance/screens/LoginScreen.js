//LoginScreen.js
import React, { useState } from 'react';
import {
  StatusBar,
  Alert,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  /*
  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:80/apiMachine/login.php', { correo: username, contrasena: password });
      if (response.data && response.status === 200) {
        await AsyncStorage.setItem('userToken', response.data.token);
        navigation.navigate('Home');
      } else {
        Alert.alert("Login Error", response.data.mensaje);
      }
    } catch (error) {
      Alert.alert("Login Error", 'Arrr matey! No treasure found. (Invalid credentials or network error)');
    }
  };
  */

  const handleLogin = async () => {
    
    navigation.navigate('Home');
      
  };


  




  return (
    <View style={styles.mainContainer}>
      <StatusBar style="auto" />
      <View style={styles.svgContainer}>
        <Svg width="100%" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Insert your SVG XML here */}
          <Path d="M50 0L61.8034 15H38.1966L50 0Z" fill="#6FCF97" />
          {/* This is just a sample Path, replace with your actual SVG content */}
        </Svg>
      </View>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          onChangeText={setUsername}
          value={username}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          onChangeText={setPassword}
          value={password}
          secureTextEntry={true}
        />
        <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
  backgroundColor: '#f1f1f1',
},
svgContainer: {
  alignItems: 'center',
  marginTop: 50,
},
loginContainer: {
  marginTop: 50,
  alignItems: 'center',
},
input: {
  width: '80%',
  height: 50,
  backgroundColor: '#fff',
  borderRadius: 25,
  padding: 15,
  marginBottom: 20,
  fontSize: 16,
},
loginButton: {
  width: '80%',
  height: 50,
  backgroundColor: '#007AFF',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 25,
},
loginButtonText: {
  color: '#fff',
  fontSize: 18,
},
});

export default LoginScreen;