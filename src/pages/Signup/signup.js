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

const SignUp = ({navigation}) => {

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
        <Text style={styles.message}>Bem Vindo(a)</Text>
      </Animatable.View>

      <Animatable.View animation='fadeInUp' style={styles.containerForm}>
        <Icon style={styles.icon} name='chevron-left' onPress={() => navigation.navigate('Welcome')}/>
        <Text style={styles.messageForm}>Crie a sua conta.</Text>

        <TextInput placeholder='Digite seu nome...' style={styles.input} />

        <TextInput placeholder='Digite um email...' style={styles.input} />


        <TextInput placeholder='Digite sua senha...' style={styles.input} />


        <TextInput placeholder='Confirme sua senha...' style={styles.input} />

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Signin')}>
          <Text style={styles.buttonText}>CRIAR CONTA</Text>
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
    marginTop: '14%',
    marginBottom: '8%',
    alignItems: 'center'
  },
  message: {
    fontSize: 40,
    fontFamily: 'Roboto-Black',
    marginBottom: 40,
    color: '#fff'
  },

  messageForm: {
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'Roboto-Black',
    marginTop: 5,
    marginBottom: 5,
    color: '#252427'
  },

  containerForm: {
    backgroundColor: '#fff',
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopEndRadius: 25,
    paddingStart: '5%',
    paddingEnd: '5%',
    

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
  icon:{
    marginTop: 10,
    fontSize: 40
  }


})

export default SignUp