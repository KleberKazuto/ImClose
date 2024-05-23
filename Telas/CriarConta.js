import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, Pressable, KeyboardAvoidingView, Platform, Alert, Dimensions } from 'react-native';
import Logo from '../assets/logo.png';
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import { Container } from './Background';
import { auth } from '../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const { width, height } = Dimensions.get('window');

const CriarConta = () => {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [sobreNome, setSobreNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if ( nome === '' || sobreNome === '' || email === '' || senha === '' || confirmarSenha === '' ) {
      Alert.alert('Erro', 'Por favor, preencha os campos em branco.');
      return;
    } else if (senha.length < 6) {
      Alert.alert('Erro', 'A senha deve ter pelo menos 6 caracteres.');
      return;
    }else if (senha !== confirmarSenha) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    } try {
      await createUserWithEmailAndPassword(auth, email, senha);
      Alert.alert('Sucesso', 'Cadastro realizado com sucesso.');
      navigation.navigate("Login");
    } catch (error) {
      console.error('Erro ao Cadastrar', error);
      Alert.alert('Erro', 'Erro ao processar o cadastro. Por favor, tente novamente mais tarde.');
    }
  };
  return(
    <Container>
      <KeyboardAvoidingView style={styles.view} behavior={Platform==="ios" ? "padding" : "height"}>
        <StatusBar />
        <Image style={styles.logo} source={Logo} />
        <Text style={styles.text2}>Cadastro</Text>
        <Text style={styles.text1}>Nome:</Text>
        <TextInput style={styles.textedit} onChangeText={text => setNome(text)}/>
        <Text style={styles.text1}>Sobrenome:</Text>
        <TextInput style={styles.textedit} onChangeText={text => setSobreNome(text)}/>
        <Text style={styles.text1}>Email:</Text>
        <TextInput style={styles.textedit} onChangeText={text => setEmail(text)}/>
        <Text style={styles.text1}>Criar Senha:</Text>
        <TextInput secureTextEntry={true} style={styles.textedit} onChangeText={text => setSenha(text)}/>
        <Text style={styles.text1}>Confirmar Senha:</Text>
        <TextInput secureTextEntry={true} style={styles.textedit} onChangeText={text => setConfirmarSenha(text)}/>
      <View>
      <Pressable 
        style={[styles.btnCriar, styles.btnLayout]} 
        onPress={handleCadastro}>
        <Text style={styles.textButton}>Criar</Text>
      </Pressable>
      <Pressable 
        style={[styles.btnVoltar, styles.btnLayout]}
        onPress={() => navigation.navigate("Login")}>
        <Text style={styles.textButton}>Voltar</Text>
      </Pressable> 
      </View>
      </KeyboardAvoidingView >
    </Container>
  )
};

const styles = StyleSheet.create({
  view: {
    padding: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  logo: {
    top: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.8,  // 80% da largura da tela
    height: height * 0.2, // 40% da altura da tela
    resizeMode: 'contain'
  },

  text1: {
    fontSize: 20,
    textAlign: 'left',
    alignItems: 'center',
    marginBottom: 5,
    color: 'white',
    fontFamily: 'Montserrat Alternates',
    fontStyle: 'Regular'
  },

  text2: {
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
    color: 'white',
    fontFamily: 'Montserrat Alternates',
    fontStyle: 'Regular'
  },

  textedit: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: '#FBFBFB',
    marginBottom: 10
  },

  btnCriar: {
    marginTop: 30,
    right: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    backgroundColor: '#ACDCFF',
    height: 20
  },


  btnVoltar: {
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
});

export default CriarConta;