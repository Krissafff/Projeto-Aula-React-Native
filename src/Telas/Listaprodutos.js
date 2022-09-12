import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';

export default function Listaprodutos() {
 return (
   <View style={estilos.container}>
     <Text>Lista de Produtos</Text>
   </View>
  );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItens: 'center',
        backgroundColor: '#ccc'
    }
});