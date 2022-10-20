import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import  Icon  from 'react-native-vector-icons/MaterialIcons';

import {
  useFonts,
  Roboto_100Thin,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
  Roboto_900Black

} from "@expo-google-fonts/roboto";

import * as Animatable from 'react-native-animatable'

const SignIn = ({navigation}) => {

  let [fontsLoaded, error] = useFonts({
    Roboto_100Thin,
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Roboto_900Black
  })
  return (
    <View style={styles.container}>
      <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
        <Text style={styles.message}>OLA MUNDO !!!</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
      <Icon style={styles.icon} name='chevron-left' onPress={() => navigation.navigate('Welcome')}/>
      <Text style={styles.messageForm}>Bem Vindo(a), Novamente</Text>
        <TextInput placeholder='Digite um email...' style={styles.input} />

        <TextInput placeholder='Digite sua senha...' style={styles.input} />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>ACESSAR</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegister} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.registerText}>NÃO TEM UMA CONTA? CADASTRE-SE</Text>
        </TouchableOpacity>

      </Animatable.View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',

  },
  containerHeader: {
    marginTop: '30%',
    marginBottom: '10%',
    paddingStart: '5%'
  },
  message: {
    fontSize: 40,
    fontFamily: 'Roboto-Black',
    color: '#fff',
    textAlign: 'center'
  },
  messageForm: {
    marginTop: 10,
    marginBottom: 20,
    fontSize: 40,
    fontFamily: 'Roboto-Black',
    color: '#252427'
  },
  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%'

  },
  title: {
    fontSize: 20,
    marginTop: 28,
    fontFamily: 'Roboto-Light'
  },
  input: {
    borderWidth: 1,
    borderColor: '#252427',
    height: 50,
    width: '100%',
    marginBottom: 10,
    fontSize: 14,
    fontFamily: 'Inter',
    borderRadius: 10,
    padding: 12
  },
  button: {
    padding: 13,
    backgroundColor: '#252427',
    width: '100%',
    borderRadius: 10,
    paddingVertical: 8,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    padding: 5,
    fontSize: 18,
    fontFamily: 'Roboto-Bold'

  },

  buttonRegister: {
    marginTop: 14,
    alignSelf: 'center'
  },

  registerText: {
    color: '#a1a1a1',
    fontFamily: 'Inter'
  },
  icon:{
    marginTop: 30,
    fontSize: 40,
    marginBottom: 20
  }

})

export default SignIn