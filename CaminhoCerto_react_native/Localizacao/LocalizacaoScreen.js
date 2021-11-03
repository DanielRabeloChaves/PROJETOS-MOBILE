import React from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import Constants from 'expo-constants'
import HeaderSubTelas from '../contatosSOS/HeaderSubTelas'
import BotaoCustomizado from '../home/BotaoCustomizado'
import Localizacao from './Localizacao'


export default ({navigation, route}) => {

  const {contato} = route.params

  return (
    <View style={styles.viewLocalizacao}> 
      <ScrollView>
        <HeaderSubTelas titulo={`${contato.tipo} ${contato.nome}`} acao={() => navigation.goBack()}/>
        <Localizacao
          telefone={`Telefone: ${contato.telefone}`} 
          endereco="Rua Tomaz de Andrade - Industrial" 
          cep="Cep 32223-000"
        />
        <View style= {styles.estiloBotton}>
          <BotaoCustomizado titulo="LIGAR" cor="red" acao={() => alert ("LIGAR")}/>
          <BotaoCustomizado  titulo="ENVIAR LOCALIZAÇÃO" acao={() => alert ("ENVIAR")}/>
        </View>
      </ScrollView>      
    </View>
  );
};

const styles = StyleSheet.create({
  viewLocalizacao: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  estiloBotton: {
    padding: 10,
    height: 200,
    justifyContent: "space-evenly",
  }
});
