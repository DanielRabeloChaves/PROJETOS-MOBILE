import React, {useState} from 'react'
import {View, StyleSheet, Text} from 'react-native'

import {Button, TextInput} from 'react-native-paper'

import Constants from 'expo-constants'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default () => {
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')

  const acaoSalvar = async () => {

  const contato = {nome, tipo: 'FILHA', telefone}

  try {
    //await AsyncStorage.removeItem('@contatos') //limpar cache do app
    const listaContatos = await AsyncStorage.getItem('@contatos').then(JSON.parse) || []

    console.log('listaContatos', listaContatos)

    listaContatos.push(contato)

    await AsyncStorage.setItem('@contatos', JSON.stringify(listaContatos))
    alert('Contato cadastrado com sucesso!')
  } catch(err) {
    alert('Falha ao tentar cadastrar o contato!')
  } 
}

  return(
    <View style={styles.container}>

      <TextInput 
        label="INFORME O NOME"
        mode='outlined'
        placeholder= 'Daniel Rabelo'
        onChangeText={text => setNome(text)}
      />

      <TextInput 
        label="INFORME O TELEFONE"
        mode='outlined'
        placeholder= '(31) 91234-4567'
        keyboardType= 'phone-pad'
        onChangeText={text => setTelefone(text)}
      />
      <Button icon='camera' mode='contained' onPress={acaoSalvar}>Salvar Contato</Button>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    padding: 30,
    justifyContent: 'space-around',
  },
})