import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/login';
import { Desafio } from '../screens/desafio';
import { Carregamento } from '../screens/carregamento';
import { Cadastro } from '../screens/cadastro';

const Stack= createStackNavigator();    


export function MainNavigation(){

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tela-Carregamento" component={Carregamento}/>
                <Stack.Screen name="Tela-Login" component={Login}/>
                <Stack.Screen name="Tela-Cadastro" component={Cadastro}/>
                <Stack.Screen name="Tela-Home" component={Desafio}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

}