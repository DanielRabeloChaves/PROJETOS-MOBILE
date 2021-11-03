import React from 'react'

import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack' ;

import HomeScreen from './home/HomeScreen'
import ListaContatosScreen from './contatosSOS/ListaContatosScreen'
import LocalizacaoScreen from './Localizacao/LocalizacaoScreen'
import RastreioScreen from './rastreio/RastreioScreen'
import DicasScreen from './dicas/DicasScreen'
import CadastroScreen from './cadastroContato/CadastroContatosScreen'

const Stack = createNativeStackNavigator()

export default () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}> 
        <Stack.Screen name="home" component={HomeScreen}/>
        <Stack.Screen name="lista-contatos" component={ListaContatosScreen} />
        <Stack.Screen name="localizacao" component={LocalizacaoScreen}/>
        <Stack.Screen name="rastreio" component={RastreioScreen}/>
        <Stack.Screen name="dicas" component={DicasScreen}/>
        <Stack.Screen name="cadastroContatos" component={CadastroScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}