import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput,
         TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import firebase from '../../components/fireBaseConnection';
import { useNavigation } from '@react-navigation/native';

import CadastroMed from '../cadastroMedicamentos/CadastroMed';


export default function CadastroUsu(){

    const navigation = useNavigation();

    function Login(){
        navigation.navigate('CadastroMed');
    }

    return(
        <View>            
          <View style={styles.btn}>
            <TouchableOpacity
            style={styles.textBtn}
            //onPress={inserir}
            >
            <Text style={{ color: '#fff', fontSize: 15}}>ENVIAR</Text>          
            </TouchableOpacity>

            <Text>    </Text> 

            <TouchableOpacity
            style={styles.textBtn}
            onPress = {Login}
            >
            <Text style={{ color: '#fff', fontSize: 15}}>LOGIN</Text>          
            </TouchableOpacity>
          </View>
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