import React from 'react'
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native'

import Constants from 'expo-constants'

import Header from './Header'
import BotaoCustomizado from './BotaoCustomizado'

export default ({navigation, route}) => {
  return (
    <View style={styles.viewMain}>
      <Header />
        <View style={styles.menu}>
          <BotaoCustomizado  titulo="SOS" cor="red" acao={() => navigation.navigate("lista-contatos")}/>
          <BotaoCustomizado titulo="Registro" acao={() => alert ("Registro")} />
          <BotaoCustomizado titulo="Rastreio" acao={() => navigation.navigate('rastreio')} />
        </View>
    </View>
  )
}
const styles = StyleSheet.create({
  viewMain: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  menu: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-evenly',
  },
})