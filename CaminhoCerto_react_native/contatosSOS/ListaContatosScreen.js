import React from 'react'

import {Text, View, StyleSheet, TouchableOpacity, FlatList, Image} from 'react-native'
import Constants from 'expo-constants'

import HeaderSubTelas from './HeaderSubTelas'
import CardContato from './CardContato'
import FloatButton from './FloatButton'

import fotoFilha from '../assets/filha.png'

const listaContatos = [
  {nome: 'LARISSA', tipo: 'FILHA', telefone:'(31) 1798-6951'},
  {nome: 'KAMILA', tipo: 'SOBRINHA', telefone:'(31) 2981-0929'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone:'(31) 3979-1245'},
  {nome: 'ANA LUISA', tipo: 'NETA', telefone:'(31) 4692-1999'},
  {nome: 'NATALIA', tipo: 'FILHA', telefone:'(31) 5919-1919'},

  {nome: 'LARISSA', tipo: 'SOBRINHA', telefone:'(31) 6959-9599'},
  {nome: 'KAMILA', tipo: 'NETA', telefone:'(31) 7599-9959'},
  {nome: 'ANA CLARA', tipo: 'FILHA', telefone:'(31) 8669-9669'},
  {nome: 'ANA LUISA', tipo: 'SOBRINHA', telefone:'(31) 6969-9669'},
  {nome: 'NATALIA', tipo: 'NETA', telefone:'(31) 1079-9779'},
  {nome: 'LARISSA', tipo: 'SOBRINHA', telefone:'(31) 1189-1949'},
  {nome: 'KAMILA', tipo: 'FILHA', telefone:'(31) 1239-6989'},
]

export default ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <HeaderSubTelas titulo="Contatos SOS" acao={() => navigation.goBack()}/>
      <FlatList data={listaContatos} renderItem={({item}) => 
        <TouchableOpacity onPress={() => navigation.navigate('localizacao', {
            contato: item
          })}>
          <CardContato 
            foto={fotoFilha}
            tipo={item.tipo}
            nome={item.nome}
            telefone={item.telefone}/>
        </TouchableOpacity>
      }
        keyExtractor={(item, index) => 'key' + index}/>
      <FloatButton acao={() => alert('Clicou no ADD')}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight
  }, 
})