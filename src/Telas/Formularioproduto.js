import 'react-native-gesture-handler';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native';

export default function FormularioProduto({navigation}) {
 return (
   <View style={estilos.container}>
     <Text>Formulario de cadastro</Text>
     <TextInput style={estilos.input} placeholder='Codigo produto'/>
     <TextInput style={estilos.input} placeholder='Nome do produto'/>
     <TextInput style={estilos.input} placeholder='Data validade'/>

     <TouchableOpacity onPress={() => navigation.navigate('ListaProdutos')} style={estilos.botao}>
       <Text>Ir para lista produto</Text>
     </TouchableOpacity>
   </View>
  );
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        alignItens: 'center',
        backgroundColor: '#ccc'
    },
    input:{
        margin: 5,
        padding: 5,
        backgroundColor: "#FFF"
    },
    botao: {
        backgroundColor: "#f18",
        margin: 14,
        width: 200,
        padding: 14,
        alignItems: 'center',
    }
});