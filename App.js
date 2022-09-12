//Tema: Venda de produtos online
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Listaprodutos from './src/Telas/Listaprodutos';
import Formulario from './src/Telas/Formularioproduto';

const Stack = createStackNavigator();

export default function App() {
 return (
   <NavigationContainer>
    <Stack.Navigator initialRouteName='FormularioDeCadastro'>
      <Stack.Screen name="ListaProdutos" option={{title:'ListadeProdutos'}} component={Listaprodutos} />
      <Stack.Screen name="FormularioDeCadastro" option={{title:'formulariodeCadastro'}} component={Formulario} />
    </Stack.Navigator>
   </NavigationContainer>
  );
}