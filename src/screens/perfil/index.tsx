import { useNavigation } from '@react-navigation/core';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Image, View, Text, ImageBackground, Platform } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import { useState, useEffect } from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';





export interface PerfilProps {
}
//Perfil
export function Perfil(props: PerfilProps) {

  const nav = useNavigation();

  const [image, setImage] = useState(null);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('SE NÃO PERMITE NÃO BRINCA!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const tirarFoto = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };


  return (
    <ImageBackground source={require('./../../assets/imgs/bg2.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.texto}>Minha Conta</Text>
        {image && <Avatar size="xlarge" rounded source={{ uri: image }} />}
        <Button title="Galeria" onPress={pickImage} buttonStyle={{borderRadius:50, borderStyle: 'solid', backgroundColor: 'silver', width: 150}}/>
        <Button title="Camera" onPress={tirarFoto} buttonStyle={{borderRadius:50, borderStyle: 'solid', backgroundColor: 'silver', width: 150, marginTop:5}}/>
      </View>
      
      <View style={styles.container2}>
        <Text style={styles.texto2}>Nome: Tarcisio Clovis</Text>
        <Text style={styles.texto2}>Email: tarcisio******@gmail.com</Text>
        <StatusBar style="dark" />
      </View>
      <View style={styles.container3}>
        <TouchableOpacity onPress={() => nav.navigate('Tela-Login')}>
          <Text style={styles.texto3}>Encerrar Sessão</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  texto: {
    textAlign: 'center',
    fontSize: 20,
    padding: 15,
    fontWeight: 'bold',
  },

  texto3: {
    textAlign: 'center',
    fontSize: 20,
    padding: 15,
    fontWeight: 'bold',
    color: '#235A5A'

  },

  background: {
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 7,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 20,

  },

  container3: {
    flex: 2

  },

  container2: {
    flex: 3,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,
  },

  texto2: {
    textAlign: 'center',
    padding: 15,
    fontSize: 10,
    fontStyle: 'italic'
  },

})