import * as React from 'react';
import { StyleSheet, Image, View, Text ,TextInput, ImageBackground, ToastAndroid } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { required } from 'yargs';
import { Input } from 'react-native-elements/dist/input/Input';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useState } from 'react';

export interface DesafioProps {
}
//PRODUTOS
export function Desafio (props: DesafioProps) {
    
    return (
      <ImageBackground source={require('./../../assets/imgs/bg2.png')}
                            style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.text1}>Agende os seus serviços</Text>
        <Input placeholder="Qual cidade você está?"
          rightIcon={{name:"map", color:"black"}}
          placeholderTextColor="lightgrey"
          inputContainerStyle={styles.inputContainer}
          inputStyle={{color:'black'}}
        />
        <StatusBar style="dark"/>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text2}>Entrar</Text>
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
  flex:1,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 20,
  alignItems: 'stretch',
  marginBottom: 100 
},

text1: {
  textAlign: 'left',
  padding: 20,
  color:'black',
  fontSize: 20,
  paddingLeft: 20,
  fontStyle: 'italic'
},

text2: {
    textAlign: 'left',
    padding: 10,
    color:'black',
    fontSize: 20,
    paddingLeft: 20,
    fontStyle: 'italic'
  },

container2: {
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 20,
  paddingBottom: 300
   
},

//criarcontalogin: {
//  color:'black',
//  fontSize: 13.5,
//  textAlign: 'center',
//  paddingTop: 1340,
//  textDecorationLine: 'underline'
//},

inputContainer: { 
  backgroundColor: '#F1F5F4',
  padding: 5,
  marginBottom: -29,
  borderRadius: 30
}
})