import React from 'react';
import { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, Pressable, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Logo from '../assets/logo.png';
import { StatusBar } from 'expo-status-bar';
import { Container } from './Background';
import  { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

const { width, height } = Dimensions.get('window');

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function userLogin() {
  signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => {
      const user = userCredential.user;
        alert('Login Efetuado...');
        console.log(user);
        navigation.navigate("Home")
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    })
}

  return(
    <Container>
      <View style={styles.view}>
        <StatusBar />
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.text1}>Email:</Text>
        <TextInput style={styles.textedit} value={email} onChangeText={setEmail} />
        <Text style={styles.text1}>Senha:</Text>
        <TextInput secureTextEntry={true} style={styles.textedit} value={senha} onChangeText={setSenha} />
        <TouchableOpacity style={styles.button} onPress={userLogin}>
          <Text style={styles.textButton}>Entrar</Text>
        </TouchableOpacity>
        <Pressable style={styles.text2}
          onPress={() => navigation.navigate("CriarConta")}>
          <Text style={styles.text2}>{`Criar Conta `}</Text>
        </Pressable>
        <Pressable style={styles.text2}
          onPress={() => navigation.navigate("EsqueciASenha")}>
          <Text style={styles.text2}>{`Esqueci a senha `}</Text>
        </Pressable>
      </View>
    </Container>
  )
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 32,
    textAlign: 'center',
    marginBottom: 5,
    color: 'white',
    fontFamily: 'Montserrat Alternates',
    fontStyle: 'Regular'
  },

  text2: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Montserrat Alternates',
    fontStyle: 'Regular'
  },

  view: {
    padding: 40,
    flex: 1
  },

  textedit: {
    width: '100%',
    padding: 13,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#FBFBFB',
    marginBottom: 10
  },

  button: {
    marginTop: 40,
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ACDCFF',
    height: 30
  },
  
  textButton: {
    fontSize: 16,
    color: 'black',
    fontFamily: 'Montserrat Alternates',
    fontStyle: 'Regular',
    lineHeight: 21,
    letterSpacing: 0.25   
  },

  logo: {
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.8,  // 80% da largura da tela
    height: height * 0.3, // 40% da altura da tela
    resizeMode: 'contain'
  }
});

export default Login;