import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Image, View, Text, TextInput, ImageBackground, ActivityIndicator } from 'react-native';
import { Input } from 'react-native-elements';
import { TouchableOpacity } from 'react-native-gesture-handler';


export interface ExplorarProps {
}
//Perfil
export function Explorar(props: ExplorarProps) {




  return (
    <ImageBackground source={require('./../../assets/imgs/bg2.png')}
      style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.texto}>Explorar</Text>
        <Input placeholder="Pesquisar"
          rightIcon={{ name: "search", color: "black" }}
          placeholderTextColor="lightgrey"
          inputContainerStyle={styles.inputContainer}
          inputStyle={{ color: 'black' }}
        />
      </View>
      <View style={styles.container2}>
        <Text style={styles.texto2}>Vistos recentemente</Text>
        <StatusBar style="dark" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    width: '100%',
    height: '100%',
  },

  container: {
    flex: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 20,

  },
  container2: {
    flex: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 20,


  },

  texto: {
    textAlign: 'center',
    fontSize: 20,
    padding: 15,
    fontWeight: 'bold',

  },


  texto2: {
    textAlign: 'center',
    padding: 15,
    fontSize: 10,
    fontStyle: 'italic'

  },

  inputContainer: {
    backgroundColor: '#F1F5F4',
    padding: 5,
    marginBottom: -29,
    borderRadius: 30
  }
})