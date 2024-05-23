import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Alert, Image, Pressable, Dimensions } from 'react-native';
import Logo from '../assets/logo.png';
import { useNavigation } from "@react-navigation/native";
import { Container } from './Background';
import { auth } from '../firebaseConfig';
import { sendPasswordResetEmail } from 'firebase/auth';

const { width, height } = Dimensions.get('window');

const EsqueciASenha = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');

  const handlePasswordReset = async () => {
    if (email === '') {
      Alert.alert('Erro', 'Por favor, insira seu email.');
      return;
    }
    
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert('Sucesso', 'Email de redefinição de senha enviado.');
      navigation.navigate("Login");
    } catch (error) {
      console.error('Erro ao enviar email de redefinição de senha', error);
      Alert.alert('Erro', 'Não foi possível enviar o email de redefinição de senha. Por favor, tente novamente mais tarde.');
    }
  };

  return(
    <Container>
      <View style={styles.view}>
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.text2}>Recuperar a Senha</Text>
        <Text style={styles.text1}>Email:</Text>
        <TextInput 
        style={styles.textedit} 
        onChangeText={text => setEmail(text)} 
        keyboardType="email-address"
        autoCapitalize="none" />
      <View>
      <Pressable 
        style={[styles.btnEnviar, styles.btnLayout]} 
        onPress={handlePasswordReset}>
        <Text style={styles.textButton}>Enviar</Text>
      </Pressable>
      <Pressable 
        style={[styles.btnVoltar, styles.btnLayout]}
        onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable> 
      </View>
      </View>
    </Container>
  )
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 20,
    textAlign: 'center',
    alignItems: 'center',
    marginBottom: 5,
    color: 'white'
  },

  text2: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    color: 'white'
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

  btnVoltar: {
    marginTop: 30,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ACDCFF',
    height: 20
  },

  btnEnviar: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ACDCFF',
    height: 20
  },
  
  btnLayout: {
    height: 32,
    width: 111,
    position: "absolute",
  },

  textButton: {
    fontSize: 16,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: 'black',
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

export default EsqueciASenha;