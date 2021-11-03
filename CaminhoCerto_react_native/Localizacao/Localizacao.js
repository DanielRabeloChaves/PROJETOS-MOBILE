import React from 'react'
import {View, Text, StyleSheet, Image} from "react-native"
import Maps from '../assets/maps2.png'


export default ({telefone, endereco, cep, titulo}) => (
  <View style={styles.informacao}>
      <View style={styles.centralizarImg}>
        <Image source={Maps} style={styles.maps} />
      </View>
      <View style={styles.text}>
          <Text style={styles.informacao}>{titulo}</Text>
          <Text style={styles.informacao}>{telefone}</Text>
          <Text style={styles.informacao}>{endereco}</Text>
          <Text style={styles.informacao}>{cep}</Text>
      </View>
  </View>
)

const styles = StyleSheet.create ({
  informacao: {
    fontFamily: "Roboto",
    fontWeight: "bold",
    fontSize:16,
    
  },
  centralizarImg: {
    justifyContent: "center",
    alignItems: "center",
  },
  maps: {
    width: 350,
    height: 350,
    borderRadius: 40,
  },
  text: {
    paddingLeft: 30,
    paddingTop: 10,
  }
})