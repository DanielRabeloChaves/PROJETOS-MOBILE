import React from 'react'

import {View, Text, StyleSheet} from 'react-native'

export default ({texto, cor='#0d5145'}) => (
    <Text style={[styles.texto, {backgroundColor: cor}]}>{texto}</Text>
)

const styles = StyleSheet.create({
  texto: {
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: 21,
    padding: 30,
    textAlign: 'center',
    borderRadius: 30,
  },
})