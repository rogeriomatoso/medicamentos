import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,
         TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import firebase from '../../components/fireBaseConnection';
import Relatorio from '../../components/Relatorio';


export default function Cadastro(){
    
  const [nome, setNome] = useState('');
  const [referencia, setReferencia] = useState('');
  const [principioAtivo, setPrincippioAtivo] = useState('');
  const [similar, setSimilar] = useState('');
  const [laboratorio, setLaboratorio] = useState('');
  const [formaConcentracao, setFormaConcentracao] = useState('');
  const [medicamentos, setMedicamentos] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  async function dados(){

    await firebase.database().ref('medicamentos').on('value', (snapshot)=>{

      setMedicamentos([]);

     snapshot.forEach((childItem)=>{
       let data = {
         key: childItem.key,
         nome: childItem.val().nome,
         referencia: childItem.val().referencia,
         principioAtivo: childItem.val().principioAtivo,
         similar: childItem.val().similar,
         laboratorio: childItem.val().laboratorio,
         formaConcentracao: childItem.val().formaConcentracao
       };
       setMedicamentos(rol=> [...rol, data].reverse());
     })
     setLoading(false);
    })
  }
  dados();
}, [])

async function inserir(){
  if(nome !== '' & referencia !== '' & principioAtivo !== '' & similar !== '' &
     laboratorio !== '' & formaConcentracao !== ''){
    let medicamentos = await firebase.database().ref('medicamentos');
    let chave = medicamentos.push().key;

    medicamentos.child(chave).set({
      nome: nome,
      referencia: referencia,
      principioAtivo: principioAtivo,
      similar: similar,
      laboratorio: laboratorio,
      formaConcentracao: formaConcentracao
    });
    alert('Medicamento inserido com sucesso!');

    setNome('');
    setReferencia('');
    setPrincippioAtivo('');
    setSimilar('');
    setLaboratorio('');
    setFormaConcentracao('');
  }
  else{
    alert('Preencha todo o formulário!');
  }
}

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Medicamento:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setNome(texto)}
      value = {nome}
      />
      <Text style={styles.texto}>Referência:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setReferencia(texto)}
      value = {referencia}
      />
      <Text style={styles.texto}>Princípio Ativo:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setPrincippioAtivo(texto)}
      value = {principioAtivo}
      />
      <Text style={styles.texto}>Medicamento Similar:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setSimilar(texto)}
      value = {similar}
      />
      <Text style={styles.texto}>Laboratório:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setLaboratorio(texto)}
      value = {laboratorio}
      />
      <Text style={styles.texto}>Forma e Concentração:</Text>
      <TextInput
      style={styles.input}
      underlineColorAndroid='transparent'
      onChangeText = {(texto)=>setFormaConcentracao(texto)}
      value = {formaConcentracao}
      />

      <View style={styles.btn}>
        <TouchableOpacity
          style={styles.textBtn}
          onPress={inserir}
        >
          <Text style={{ color: '#fff', fontSize: 18}}>INSERIR</Text>          
        </TouchableOpacity>

         <Text>    </Text> 

        <TouchableOpacity
          style={styles.textBtn}
           // onPress = {()=> }
        >
          <Text style={{ color: '#fff', fontSize: 18}}>LOGOUT</Text>          
        </TouchableOpacity>
     </View>

      {loading ?
        (
          <ActivityIndicator color= '#121212' size={45}/>
        )
        :
        (
          <FlatList 
            keyExtractor={item => item.key}
            data={medicamentos}
            renderItem={ ({item}) => (<Relatorio data={item}/>)}
          />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: '#f6f7f9'
   },

  texto:{
     fontSize: 18,
   },

   btn:{
    flexDirection:'row',
    marginTop: 10,
    marginBottom: 15, 
    justifyContent: 'center',
    alignItems: 'center',
   },

   textBtn:{     
     padding: 5,
     backgroundColor: '#48636f',
     alignItems: 'center',
     height: 40, 
     width: 150,        
     borderRadius: 10,        
   },

   input:{
     marginBottom: 10,
     padding: 10,
     borderWidth: 1,
     borderColor: '#121212',
     backgroundColor: '#cdcdcd',
     borderRadius: 5,
     height: 35,
     fontSize: 17
   },
});

