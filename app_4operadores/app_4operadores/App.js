import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export default function App(){

  const [numero1, setNUMERO1] = useState('');
  const [numero2, setNUMERO2] = useState('');

  function somar(){
    const resultado = parseFloat(numero1) + parseFloat(numero2)  
    alert(resultado);
  }

  function subtrair(){
    const resultado = parseFloat(numero1) - parseFloat(numero2)  
    alert(resultado);
  }

  function multiplicar(){
    const resultado = parseFloat(numero1) * parseFloat(numero2)  
    alert(resultado);
  }

  function dividir(){
    const resultado = parseFloat(numero1) / parseFloat(numero2)  
    alert(resultado);
  }

  return(
<View style= {estilo.container}>

<Text style={estilo.titulo}> Calculadora</Text>

<TextInput style={estilo.input} keyboardType='numeric' onChangeText={(numero1)=> setNUMERO1 (numero1)} value={numero1}
placeholder="Digite um número:"/>

<TextInput style={estilo.input} keyboardType='numeric' onChangeText={(numero2)=> setNUMERO2 (numero2)} value={numero2}
placeholder="Digite um número:"/>

<TouchableOpacity style={estilo.botaosomar} onPress={somar}> 
  <Text style={estilo.textosomar}>SOMAR </Text>
</TouchableOpacity>

<TouchableOpacity style={estilo.botaosubtrair} onPress={subtrair}>
<Text style={estilo.textosubtrair}>SUBTRAIR </Text>
</TouchableOpacity>

<TouchableOpacity style={estilo.botaomultiplicar} onPress={multiplicar}>
  <Text style={estilo.textomultiplicar}>MULTIPLICAR </Text>
</TouchableOpacity>

<TouchableOpacity style={estilo.botaodividir} onPress={dividir}>
  <Text style={estilo.textodividir}>DIVIDIR </Text>
</TouchableOpacity>

</View>

  );
}

const estilo = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    backgroundColor:'#000000',

  },
  input:{
  backgroundColor:'#FFFAFA',
  marginBottom: 20,
  marginLeft:30,
  marginRight: 30,
  padding:20,
  borderRadius:10,
  fontSize:20,

  },
  titulo:{
    fontSize:40,
    margin:30,    
    color:'#7B68EE',
    textAlign:'center',

  },
  botaosomar:{
    justifyContent:'center',
    backgroundColor:'#FF0000',
    marginBottom: 20,
    marginLeft:30,
    marginRight: 30,
    padding:10,
    borderRadius:10,

  },
  textosomar:{
    textAlign:'center',
    fontSize:20,

  },
  botaosubtrair:{
    justifyContent:'center',
    backgroundColor:'#B0E0E6',
    marginBottom: 20,
    marginLeft:30,
    marginRight: 30,
    padding:10,
    borderRadius:10,

  },
  textosubtrair:{
    textAlign:'center',
    fontSize:20,
  },
  botaomultiplicar:{
    justifyContent:'center',
    backgroundColor:'#3CB371',
    marginBottom: 20,
    marginLeft:30,
    marginRight: 30,
    padding:10,    
    borderRadius:10,

  },
  textomultiplicar:{
    textAlign:'center',
    fontSize:20,

  },
  botaodividir:{
    justifyContent:'center',
    backgroundColor:'#A020F0',
    marginBottom: 20,
    marginLeft:30,
    marginRight: 30,
    padding:10,    
    borderRadius:10,

  },
  textodividir:{
    textAlign:'center',
    fontSize:20,
  }

});
