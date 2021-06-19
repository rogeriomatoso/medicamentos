import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './src/components/fireBaseConnection';
import { FontAwesome, Feather } from '@expo/vector-icons';
import {createStackNavigator } from '@react-navigation/stack';

import CadastroMed from './src/Pages/cadastroMedicamentos/CadastroMed';
import CadastroUsu from './src/Pages/cadastroUsuario/cadastroUsu';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= 'CadastroMed' component={CadastroMed}/>
        <Stack.Screen name= 'CadastroUsu' component={CadastroUsu}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
