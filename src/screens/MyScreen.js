import * as React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
const logo = require('../assets/images/logoScreen.png')


export default class MyScreen extends React.Component {
  render() {
    this.props.navigation.setOptions({
      headerBackTitle: '',
      headerShown: false,
    })

    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.image} />

        <Text style={styles.titlehello}>Hello!</Text>

        <Text style={styles.soustitle}>Welcome to application </Text>
        <View style={styles.viewstyle}>


          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style={styles.touchlogin}
          >
            <Text style={styles.titlelogin}>Login</Text>
          </TouchableOpacity>


          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}
            style={styles.touchregister}>
            <Text style={styles.titleregister}>Register</Text>
          </TouchableOpacity>


        </View>
        

      

      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 100,
    paddingBottom: 100,
    padding: 40,
    backgroundColor: 'white',
  },
  image: {
    width: "80%",
    height: 320
  },
  titlehello: {
    fontSize: 40,
    fontWeight: 'bold'
  },
  soustitle: {
    fontSize: 15,
    color: '',
    textAlign: 'center',
    marginHorizontal: 20
  },
  touchlogin:
  {
    backgroundColor: '#8e44ad',
    padding: 10,
    width: 150,
    borderRadius: 30,
    marginHorizontal: 2,

  },
  titlelogin: {
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 18, fontWeight: 'bold'
  },
  viewstyle: {
    flexDirection: 'row',
    margin: 20,
    paddingVertical: 20,
  },
  touchregister: {
    backgroundColor: '#ffffff',
    borderWidth: 3,
    borderColor: "#8e44ad",
    padding: 10,
    width: 150,
    borderRadius: 30,
    marginHorizontal: 2
  },
  titlesocial: {
    fontSize: 16,
    marginTop: 10
  },
  titleregister: {
    textAlign: 'center',
    color: '#8e44ad',
    fontSize: 18,
    fontWeight: 'bold'
  },
  viewsocial: {
    flexDirection: 'row',
    marginTop: 30
  },
  socialfb: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#4267B2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  socialgoogle: {
    height: 60,
    width: 60,
    borderRadius: 60 / 2,
    backgroundColor: '#DB4437',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center'

  },

  titlefb: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff'
  },
  titlegoogle: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#fff'
  }
});
