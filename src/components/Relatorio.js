import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Relatorio({data}){
    return(
        <View style={styles.card}>
            <Text style={styles.text}>Nome: {data.nome}</Text>
            <Text style={styles.text}>Referência: {data.referencia}</Text>
            <Text style={styles.text}>Princípio Aitvo: {data.principioAtivo}</Text>
            <Text style={styles.text}>Medicamento Similar: {data.similar}</Text>
            <Text style={styles.text}>Laboratório: {data.laboratorio}</Text>
            <Text style={styles.text}>Forma e Concetração: {data.formaConcentracao}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        backgroundColor: '#122c44',
        borderRadius: 10,
    },
    
    text:{
        color: '#fff',
        fontSize: 14,
    },
});