import React from 'react'
import {TouchableOpacity, StyleSheet} from 'react-native'

import { Ionicons } from '@expo/vector-icons';


export default ({acao}) => (
  <TouchableOpacity onPress={acao} style={styles.floatButton}>
    <Ionicons name="add" size={35} color="white" />
  </TouchableOpacity> 
)

const styles = StyleSheet.create({
  floatButton: {
    backgroundColor: '#24cbaf',
    width: 70,
    height: 70,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 20,
    bottom: 40,
    elevation: 8,
  }
})

