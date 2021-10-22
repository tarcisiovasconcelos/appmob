import * as React from 'react';
import { StyleSheet, Image, View, Text ,TextInput, ImageBackground, ToastAndroid, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { required } from 'yargs';
import { Input } from 'react-native-elements/dist/input/Input';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { useState } from 'react';
import { InputRound } from './components';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useNavigation } from '@react-navigation/core';
import { TouchableOpacity } from 'react-native-gesture-handler';

export interface LoginProps {
}
//LOGIN
export function Login (props: LoginProps) {

    const nav = useNavigation();
    const [erro, setErro] = useState<null|string>(null);
        
    const login = async (dados:any) => {
        setErro(null)

        //delay
        await new Promise((resolve, error) => setTimeout(() => resolve(''), 4000))
        console.log(dados)
        if (dados.email == 'tarcisioclovis@gmail.com' && dados.senha == '123456')
          nav.navigate('Tela-Home')
        else
          setErro('Tudo errado meu jovem')
    }

    return (
      <ImageBackground source={require('./../../assets/imgs/bg2.png')}
                            style={styles.background}>
      
      <Formik
        initialValues={{email:'', senha: ''}}
        validationSchema={Yup.object({
          email: Yup.string().required('Campo Obrigatório').email('Campo deve ser EMAIL'),
          senha: Yup.string().required('Campo Obrigatório').min(6,'6 Digitos meu véi')

        })}
        onSubmit={login}>
        {({ handleChange, touched, handleSubmit, handleBlur, isSubmitting, errors}) => (
        <View style={styles.container2}>
          <Text style={styles.texta}>Entrar</Text>
          <InputRound onBlur={handleBlur('email')} placeholder="Digite seu email" icone="email" onChangeText={handleChange('email')}/>
          { touched.email && <Text style={styles.errorLabel}>{errors.email}</Text>}

          <InputRound onBlur={handleBlur('senha')} placeholder="Digite sua senha" icone="lock" senha onChangeText={handleChange('senha')}/>
          { touched.senha && <Text style={styles.errorLabel}>{errors.senha}</Text>}
          { erro != null && <Text style={{color: 'red', fontSize:25, textAlign: 'center', marginBottom: 20}}>{erro}</Text>}
          { isSubmitting && <ActivityIndicator style={styles.bolinha}  size="large" color="black"/>}
          { !isSubmitting && <Button title="Logar" onPress={handleSubmit} buttonStyle={{borderRadius: 30, backgroundColor: '#1C3144', marginTop: 10}}></Button>}
        </View>)}
      </Formik>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => nav.navigate('Tela-Cadastro')}>
        <Text style={styles.criarcontalogin}>Não tem uma conta? Clique aqui para criar uma agora.</Text>
        </TouchableOpacity>
        <StatusBar style="dark"/>
      </View>
      </ImageBackground>
    );
}

const styles = StyleSheet.create({
background: {
  width: '100%',
  height: '100%',  
},

bolinha: {
  flexDirection: 'row',
  justifyContent: 'center',
  paddingTop: 15
},

container: {
  flex:1,
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: 10,
  alignItems: 'center' 
},

texta: {
  textAlign: 'left',
  padding: 10,
  color:'black',
  fontSize: 20,
  paddingLeft: 20,
  fontStyle: 'italic'
},

container2: {
  flex:50,
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 20,
  paddingBottom: 300
   
},

criarcontalogin: {
  color:'black',
  fontSize: 13.5,
  textAlign: 'center',
  textDecorationLine: 'underline'
},

errorLabel: {
  color:'red',
  fontSize: 18,
  marginTop: 5,
  marginBottom: 5,
  textAlign: 'right'
  
}

})