import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, Image, Pressable, TouchableOpacity, Dimensions, SafeAreaView, Modal } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Perfil from '../assets/Perfil.png';

  const { width, height } = Dimensions.get('window');
  
  const PopupMenu = () => {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    const options = [
    {
      title: 'Perfil',
      icon: 'account',
      action: () => alert('Perfil')
    },

    {
      title: 'Configurações',
      icon: 'cogs',
      action: () => alert('Configurar')
    },

    {
      title: 'Deslogar',
      icon: 'logout',
      action: () => navigation.navigate("Login")
    }
  ];

    return (
      <View>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <Image style={styles.imgPerfil} source={Perfil} />
        </TouchableOpacity>     
        <Modal transparent visible={visible}>
          <SafeAreaView onTouchStart={() => setVisible(false)}>
            <View style={styles.popup}>
              {options.map((op, i) => (
                <TouchableOpacity style={[styles.options, {borderBottomWidth: i === options.length - 1 ? 0 : 1}]} key={i} onPress={op.action}>
                  <Text>{op.title}</Text>
                  <Icon name={op.icon} size={26} color={'#212121'} style={{ marginLeft: 10 }} />
                </TouchableOpacity>
              ))}
            </View>
          </SafeAreaView>
        </Modal>
      </View>
    )
  };

  const styles = StyleSheet.create({
    imgPerfil: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.2,  // 80% da largura da tela
    height: height * 0.15, // 40% da altura da tela
    resizeMode: 'contain'
  },
  
   popup: {
     borderRadius: 8,
     borderColor: '#333',
     borderWidth: 1,
     backgroundColor: 'white',
     paddingHorizontal: 15,
     position: 'absolute',
     top: 70,
     right: 20
   },

   options: {
     flexDirection: 'row',
     justifyContent: 'space-between',
     alignItems: 'center',
     paddingVertical: 7,
     borderBottomColor: '#ccc'
   }
  });

  export default PopupMenu;