import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack'
import { Login } from '../screens/login';
import { Desafio } from '../screens/desafio';
import { Carregamento } from '../screens/carregamento';
import { Cadastro } from '../screens/cadastro';
import { ConfiguracoesNavegacao } from './configuracoes';
import { Perfil } from '../screens/perfil';
import { Agendamento } from '../screens/agendamento';
import { Explorar } from '../screens/explorar';

const Stack = createStackNavigator();



/*export const NavegacaoPrincipal = () => (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{ animationEnabled: true, headerShown: false }}>
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="app" component={AppNavegacao}
                options={{ cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS }} />
        </Stack.Navigator>
    </NavigationContainer>
)
*/
export function MainNavigation(){

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animationEnabled: true, headerShown: false}}>
                <Stack.Screen name="Tela-Carregamento" component={Carregamento}/>
                <Stack.Screen name="Tela-Login" component={Login}/>
                <Stack.Screen name="Tela-Cadastro" component={Cadastro}/>
                <Stack.Screen name="Tela-Home" component={ConfiguracoesNavegacao}/>
                <Stack.Screen name="Tela-Perfil" component={Perfil}/>
                <Stack.Screen name="Tela-Agendamento" component={Agendamento}/>
                <Stack.Screen name="Tela-Explorar" component={Explorar}/>
            </Stack.Navigator>
        </NavigationContainer>
    )

    }
        

