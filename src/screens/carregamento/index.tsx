import * as React from 'react';
import { StyleSheet, Image, View, Text ,TextInput, ImageBackground, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { required } from 'yargs';
import { useNavigation } from '@react-navigation/core';

export interface CarregamentoProps {
}
//CARREGAMENTO
export function Carregamento (props: CarregamentoProps) {

    const nav = useNavigation();
    nav.navigate('Tela-Login')


    return (
      <ImageBackground source={require('./../../assets/imgs/bg1.png')}
                            style={styles.background}>
      <View style={[styles.container , styles.bolinha]}> 
      <ActivityIndicator size="large" color="black" />
         <StatusBar style="light"/>
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
    justifyContent: 'center',
    padding: 20,
    alignItems: 'stretch',  
  },

  bolinha: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 200
  },
})