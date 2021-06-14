import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import firebase from './src/components/fireBaseConnection';

export default function App() {

  const [medicamento, setMedicamento] = useState('');
  const [referencia, setReferencia] = useState('');
  const [principioAtivo, setPrincippioAtivo] = useState('');
  const [similar, setSimilar] = useState('');
  const [laboratorio, setLaboratorio] = useState('');
  const [formaConcentracao, setFormaConcentracao] = useState('');

useEffect(() => {
  async function dados(){
    await firebase.database().ref('nome').on('value', (snapshot)=>{
      //setNome(snapshot.val())
    })
  }
  dados();
}, [])

async function Inserir(){
  
}

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Medicamento:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setMedicamento(texto)}
      />
      <Text style={styles.texto}>Referência:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setReferencia(texto)}
      />
      <Text style={styles.texto}>Princípio Ativo:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setPrincippioAtivo(texto)}
      />
      <Text style={styles.texto}>Medicamento Similar:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setSimilar(texto)}
      />
      <Text style={styles.texto}>Laboratório:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setLaboratorio(texto)}
      />
      <Text style={styles.texto}>Forma e Concentração:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setFormaConcentracao(texto)}
      />
     <TouchableOpacity
      style={styles.textBtn}
      onPress={()=>{inserir}}

     
     >
       <Text style={{ color: '#fff', fontSize: 18}}>INSERIR</Text>
       
     </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
   },

   texto:{
     fontSize: 18,
   },

   textBtn:{     
     padding: 5,
     backgroundColor: '#48636f',
     alignItems: 'center',
     height: 40,    
     justifyContent: 'center',
     borderRadius: 15,
     marginTop: 10,
     marginBottom: 15,    
   },

   input:{
     marginBottom: 10,
     padding: 10,
     borderWidth: 1,
     borderColor: '#121212',
     borderRadius: 5,
     height: 35,
     fontSize: 17
   },
});
