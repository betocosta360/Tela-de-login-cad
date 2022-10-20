import React from 'react'


import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import * as Animatable from 'react-native-animatable'


const Welcome = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={styles.containerLogoTitle}>
        <Animatable.Text style={styles.title}>
          OLA MUNDO !!!
        </Animatable.Text>
      </View>

      <Animatable.View delay={600} animation='fadeInUp' style={styles.containerForm}>

        <View style={styles.containerLogo}>

          <Animatable.Image
            animation='flipInY'
            source={require('../../assets/images/livro.png')}
            style={{ width: 150, height: 150 }}
            resizeMode="contain"
          />
          <Text style={styles.titleForm}>is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It
            has survived not only five centuries.</Text>

        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signin')}
          style={styles.buttonLogin}
        >
          <Text style={styles.buttonText}>ACESSAR</Text>

        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Signup')}
          style={styles.buttonCadastrar}
        >
          <Text style={styles.buttonTextCadastrar}>CADASTRE-SE</Text>

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
  containerLogoTitle: {
    paddingVertical: '20%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerLogo: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  containerForm: {
    flex: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingStart: '5%',
    paddingEnd: '5%'
  },

  title: {
    fontSize: 40,
    fontFamily: 'Roboto-Black',
    marginTop: 25,
    color: '#fff',


  },
  titleForm: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular' ,
    marginBottom: 40,
    color: '#252427',

  },
  text: {
    color: '#000',
    fontFamily: 'Roboto-Medium'
  },
  buttonLogin: {
    padding: 13,
    marginTop: 40,
    backgroundColor: '#252427',
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'

  },

  buttonCadastrar: {
    padding: 10,
    marginTop: 10,
    backgroundColor: '#fff',
    borderWidth: 3,
    borderColor: '#252427',
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
    bottom: '15%',
    alignItems: 'center',
    justifyContent: 'center'

  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
    fontFamily: "Roboto-Light"

  },
  buttonTextCadastrar: {
    fontSize: 18,
    color: '#252427',
    fontFamily: "Roboto-Light"

  },
})

export default Welcome