import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Carregamento } from './src/screens/carregamento';
import { Login } from './src/screens/login';
import { Cadastro } from './src/screens/cadastro';
import { Desafio } from './src/screens/desafio';
import { MainNavigation } from './src/navigations';

export default function App() {
  return (<MainNavigation/>);
}