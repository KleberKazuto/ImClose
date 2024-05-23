import React, { useState } from 'react';
import { Text, View, ScrollView, StyleSheet, Image, Pressable, FlatList } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icons from 'react-native-vector-icons/FontAwesome5';
import { StatusBar } from 'expo-status-bar';
import { Container } from './Background';
import imgHome from '../assets/ImClose_Image2x.png';
import Foto1 from '../assets/Foto1.png';
import Foto2 from '../assets/Foto2.png';
import Foto3 from '../assets/Foto3.png';
import Foto4 from '../assets/Foto4.png';
import Foto5 from '../assets/Foto5.png';
import Paisagem1 from '../assets/Paisagem1.jpg';
import Paisagem2 from '../assets/Paisagem2.jpg';
import PopupMenu from './PopupMenu';

const DATA = [
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Foto1,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Foto5,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Foto1,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Foto2,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Foto3,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Foto4,
  },
  {
    id: Math.random().toString(36).substring(2, 27),
    photoURL: Foto5,
  },
];

const Home = () => {
  const navigation = useNavigation();
  
  return(
    <Container>
      <View style={styles.header}>  
        <Pressable onPress={() => navigation.navigate("Login")}>     
          <Image source={imgHome} /> 
        </Pressable> 
          <View>
            <PopupMenu />
          </View>  
          
      </View>
      <View style={styles.stories}>
        <FlatList 
          horizontal={true} 
          data={DATA} 
          keyExtractor={(item) => item.id} 
          renderItem={(item) => (
            <View style={styles.storiesCard} key={item.item.id}>
              <Image style={styles.storiesCardImage} source={item.item.photoURL} />
            </View>
          )} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ width: "100%" }}  >
        <View style={styles.content}>
            <View style={styles.contentHeader}>
              <View style={styles.contentHeaderLeft}>
                <Image style={styles.contentHeaderLeftImage} source={Foto1} />
                <Text style={styles.contentHeaderLeftText} >Guthemberg Willyan</Text>
              </View>
              <Icons name="ellipsis-h" size={15} color='#FFF' />
            </View>
            <View style={styles.contentImage} >
              <Image source={Paisagem1} />
            </View>
            <View>
              <View style={styles.contentFooterOptions}>
                <View style={styles.contentFooterOptionsButton}>
                  <Icons name="heart" size={15} color='#FFF' />
                  <Icons name="comment-alt" size={15} color='#FFF' />
                </View>   
                <Icons name="share" size={15} color='#FFF' />
              </View>
              <View style={styles.contentFooterTexts}>
                <Text style={[styles.contentFooterText1, styles.contentFooterText]}>Guthemberg Willyan  Pense numa calmaria!</Text>
                <Text style={[styles.contentFooterText2, styles.contentFooterText]}>Ver todos os 57 comentários</Text>
                <Text style={[styles.contentFooterText3, styles.contentFooterText]}>Postado à 12h atrás</Text>
              </View>
            </View>
        </View>

        <View style={styles.content}>
            <View style={styles.contentHeader}>
              <View style={styles.contentHeaderLeft}>
                <Image style={styles.contentHeaderLeftImage} source={Foto3} />
                <Text style={styles.contentHeaderLeftText} >Vivian Kelly</Text>
              </View>
              <Icons name="ellipsis-h" size={15} color='#FFF' />
            </View>
            <View style={styles.contentImage} >
              <Image source={Paisagem2} />
            </View>
            <View>
              <View style={styles.contentFooterOptions}>
                <View style={styles.contentFooterOptionsButton}>
                  <Icons name="heart" size={15} color='#FFF' />
                  <Icons name="comment-alt" size={15} color='#FFF' />
                </View>   
                <Icons name="share" size={15} color='#FFF' />
              </View>
              <View style={styles.contentFooterTexts}>
                <Text style={[styles.contentFooterText1, styles.contentFooterText]}>Vivian Kelly  Um belo campo florido!</Text>
                <Text style={[styles.contentFooterText2, styles.contentFooterText]}>Ver todos os 20 comentários</Text>
                <Text style={[styles.contentFooterText3, styles.contentFooterText]}>Postado à 4h atrás</Text>
              </View>
            </View>
        </View>
      </ScrollView>
    </Container>
  );
};

const styles = StyleSheet.create({
   header: {
    marginTop: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: "100%",
    paddingHorizontal: 10
   },

   stories: {
    width: '100%',
    alignContent: 'center',
    paddingLeft: 10,
    paddingVertical: 10,
   },

   storiesCard: {
    alignContent: 'center',
    borderWidth: 2,
    borderColor: '#F7B55A',
    borderRadius: 50,
    marginRight: 15
   },

   storiesCardImage: {
    width: 64,
    height: 64
   },

   content: {
    width: '100%',
    marginBottom: 10
   },

   contentHeader: {
    height: 52,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10
   },

   contentHeaderLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10
   },

   contentHeaderLeftImage: {
    width: 35,
    height: 35,
    borderWidth: 2
   },

   contentHeaderLeftText: {
    color: '#FFF'
   },

   contentImage: {
    width: '100%',
    height: 355,
    alignItems: 'center'
   },

   contentFooterOptions: {
    height: 40,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
   },
   
   contentFooterOptionsButton: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
   },

   contentFooterText: {
    color: "#fff"
   },

   contentFooterTexts: {
    paddingLeft: 20,
    gap: 10
   },

   contentFooterText1: {
    fontSize: 14,
  },

  contentFooterText2: {
    fontSize: 14,
  },

  contentFooterText3: {
    fontSize: 10,
  }
});

export default Home;