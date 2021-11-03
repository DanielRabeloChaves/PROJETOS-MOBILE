import React from 'react'

import {View, StyleSheet} from 'react-native'

import Constants from 'expo-constants'

import HeaderSubtelas from '../contatosSOS/HeaderSubTelas'
import Texto from './Texto'
import BotaoCustomizado from '../home/BotaoCustomizado'

export default ({navigation, route}) => {
  return(
    <View style={styles.container}>
        <HeaderSubtelas titulo= "RASTREIO" acao={() => navigation.goBack()} />
        <View style={styles.main}>
          <Texto texto= "O rastreio é composto de varias perguntas sobre diferentes fatores de risco." />
          <Texto texto= "Sempre que sua resposta apresentar um fator de risco recebera uma orientação em video." cor= "#1c9984"/>
        </View>   
        <View style={styles.botao}>
          <BotaoCustomizado titulo = 'Continuar' acao={() => navigation.navigate('dicas')}/>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  main: {
    flex: 1,
    justifyContent: 'space-evenly',
    padding: 30, 
  },
  botao: {
    padding: 30,
  }
})