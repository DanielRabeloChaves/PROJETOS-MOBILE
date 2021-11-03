import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

import { AntDesign } from '@expo/vector-icons'

export default ({titulo, acao}) => (
  <View style={styles.header}>
    <TouchableOpacity onPress={acao}>
      <AntDesign name="leftcircle" size={24} color="white" />
    </TouchableOpacity>  
    <Text style={styles.headerTitulo}>{titulo}</Text>
  </View>
)

const styles = StyleSheet.create({
  header : {
    flexDirection: 'row',
    backgroundColor: '#24cbaf',
    padding: 10
  },
  headerTitulo : {
    fontFamily: 'Roboto',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flexGrow: 1,
    color: 'white'
  }
})