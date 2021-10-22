import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Cadastro } from '../screens/cadastro';
import { Desafio } from '../screens/desafio';
import { MaterialIcons } from '@expo/vector-icons';
import { Perfil } from '../screens/perfil';
import { Explorar } from '../screens/explorar';
import { Agendamento } from '../screens/agendamento';
import { StyleSheet, Image, View, Text ,TextInput, ImageBackground, ToastAndroid, ActivityIndicator } from 'react-native';




const Tab = createBottomTabNavigator();

export function ConfiguracoesNavegacao () {

    return (
        <Tab.Navigator >
            <Tab.Screen name= "Inicio" component={Desafio} options={{
		    tabBarLabel:"Home",
		    tabBarIcon:() => <MaterialIcons name="home" size={30}/> }}/>

            <Tab.Screen name= "Pesquisar" component={Explorar} options={{
		    tabBarLabel:"Explorar",
		    tabBarIcon:() => <MaterialIcons name="search" size={30}/> }}/>

            <Tab.Screen name= "Meus Agendamentos" component={Agendamento} options={{
		    tabBarLabel:"Agendamentos",
		    tabBarIcon:() => <MaterialIcons name="event-note" size={30}/> }}/>

            <Tab.Screen name= "Minha Conta" component={Perfil} options={{
		    tabBarLabel:"Perfil",
		    tabBarIcon:() => <MaterialIcons name="person" size={30}/> }}/>
        </Tab.Navigator>
    )
}