import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'



export default ({foto, tipo, nome, telefone}) => (
  <View style={styles.card}>
    <Image source={foto} style={styles.cardImage} />
    <View style={styles.cardInfo}>
      <Text style={styles.cardText}>{tipo}</Text>
      <Text style={[styles.cardText, styles.cardTextDestaque]}>{nome}</Text>
      <Text style={styles.cardText}>{telefone}</Text>
    </View>
  </View>
)

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 20,
    marginTop: 10,
  },
  cardImage: {
    width: 70,
    height: 80,
    borderRadius: 13
  },
  cardInfo: {
    flexDirection: 'column',
    marginLeft: 20
  },
  cardText: {
    fontFamily: 'Roboto',
    fontSize: 14,
  },
  cardTextDestaque: {
    fontWeight: 'bold'
  }
})