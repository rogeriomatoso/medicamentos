import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,
         TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import firebase from '../../components/fireBaseConnection';
import { useNavigation } from '@react-navigation/native';

import CadastroMed from '../cadastroMedicamentos/CadastroMed';


export default function CadastroUsu(){

   // const navigation = useNavigation();
   const [nome, setNome] = useState('');
   const [email, setEmail] = useState('');
   const [cidade, setCidade] = useState('');
   const [password, setPassword] = useState('');
   const [user, setUser] = useState('');

    async function Login(){
       await firebase.auth().signInWithEmailAndPassword(email, password)
       .then((value)=>{
         alert('Bem-vindo(a): ' + value.user.email);
         setUser(value.user.email);
       })
       .catch((error)=>{
         alert('Algo deu errado...');
         return;
       })
       setEmail('');
       setPassword('');
    }

    async function logout(){
     await firebase.auth().signOut();
     setUser('');
     alert('Voce saiu do sistema!');
    }
    

    async function cadastrar(){
      await firebase.auth().createUserWithEmailAndPassword(email,password)
        .then((value)=>{
          firebase.database().ref('usuarios').child(value.user.uid).set({
            nome: nome,
            cidade: cidade
          })
          alert('Usuario criado!')
          
        })
        .catch((error)=>{
          if(error.code === 'auth/weak-password'){
            alert('Senhas devem ter mo minimo 6 caracteres!');
            return;
          }
          if(error.code === 'auth/invalid-email'){
            alert('Email invalido!')
            return;
          }
          else{
            alert('Algo deu errado!')
            return;
          }
        })
        setNome('');
        setEmail('');
        setCidade('');
        setPassword('');
    }

    return(
        <View style={styles.container}>            

          <Text style={styles.texto}>Nome:</Text>
          <TextInput
          style={styles.input}
          underlineColorAndroid='transparent'
          onChangeText = {(texto)=>setNome(texto)}
          value = {nome}
          />
          <Text style={styles.texto}>E-mail:</Text>
          <TextInput
          style={styles.input}
          underlineColorAndroid='transparent'
          onChangeText = {(texto)=>setEmail(texto)}
          value = {email}
          />
          <Text style={styles.texto}>Cidade:</Text>
          <TextInput
          style={styles.input}
          underlineColorAndroid='transparent'
          onChangeText = {(texto)=>setCidade(texto)}
          value = {cidade}
          />
          <Text style={styles.texto}>Senha:</Text>
          <TextInput
          style={styles.input}
          secureTextEntry={true}
          underlineColorAndroid='transparent'
          onChangeText = {(texto)=>setPassword(texto)}
          value = {password}
          />

          <View style={styles.btn}>
            <TouchableOpacity
            style={styles.textBtn}
            onPress={cadastrar}
            >
            <Text style={{ color: '#fff', fontSize: 15}}>ENVIAR</Text>          
            </TouchableOpacity>
            <Text>   </Text>
            <TouchableOpacity
             style={styles.textBtn}
             onPress={Login}
            >
            <Text style={{ color: '#fff', fontSize: 15}}>ACESSAR</Text>          
            </TouchableOpacity>
          </View> 

          <View style={{marginTop: 20}}></View>          
            
          <Text style={{fontSize: 18, textAlign: 'center'}}>{user}</Text>
          { user.length > 0 ?
            (
              <View style={styles.btn}>  
              <TouchableOpacity
              style={styles.textBtn}
              onPress={logout}
              >
              <Text style={{ color: '#fff', fontSize: 15}}>SAIR</Text>          
              </TouchableOpacity>
            </View>
            )
            :
            (
              <Text style={{fontSize: 18, textAlign: 'center'}}>Stand By...</Text>
            )             
          } 
        </View>
    )
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
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 15, 
        justifyContent: 'center',
        alignItems: 'center',
       },
    
       textBtn:{     
         padding: 5,
         backgroundColor: '#48636f',
         alignItems: 'center',
         height: 30, 
         width: 100,        
         borderRadius: 10,        
       },
    
       input:{
         marginBottom: 10,
         padding: 10,
         borderWidth: 1,
         borderColor: '#121212',
         backgroundColor: '#cdcdcd',
         borderRadius: 5,
         height: '1.5%',     
         fontSize: 17
       },
})