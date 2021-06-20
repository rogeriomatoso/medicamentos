import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import firebase from './src/components/fireBaseConnection';
import { FontAwesome, Feather } from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon  from '@expo/vector-icons/Ionicons';

import CadastroMed from './src/Pages/cadastroMedicamentos/CadastroMed';
import CadastroUsu from './src/Pages/cadastroUsuario/cadastroUsu';

//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const icons = {
  CadastroUsu:{
    name: 'ios-people'
  },
  CadastroMed:{
    name: 'ios-home'
  }
}

export default function App() {
  return(
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route})=>({
          tabBarIcon: ({color, size})=>{
            const {name}= icons[route.name]
            return <Icon name={name} color={color} size={25}/>
          }
        })}
      >
        <Tab.Screen name='CadastroUsu' component={CadastroUsu}/>
        <Tab.Screen name='CadastroMed' component={CadastroMed}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
