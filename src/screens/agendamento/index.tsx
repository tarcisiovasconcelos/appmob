import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Image, View, Text ,TextInput, ImageBackground, ActivityIndicator } from 'react-native';


export interface AgendamentoProps {
}
//Perfil
export function Agendamento (props: AgendamentoProps) {




    return (
      <ImageBackground source={require('./../../assets/imgs/bg2.png')}
                            style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.texto}>Meus Agendamentos</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.texto2}>Você não possui nenhum agendamento!</Text>
        <StatusBar style="dark" />
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

  background: {
    width: '100%',
    height: '100%',  
  },

  container: {
    flex:7,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    padding: 20,
      
  },

  container2: {
    flex:20,
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