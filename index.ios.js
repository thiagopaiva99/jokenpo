import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Button, Image, StatusBar } from 'react-native'

export default class jokenpo extends Component {

  constructor( props ){
    super( props )

    this.state = {
      userChoise: '',
      computerChoise: '',
      result: ''
    }
  }

  jokenpo( userChoise ){
    const random = Math.floor( Math.random() * 3 )

    let computerChoise = ''

    switch ( random ) {
      case 0: computerChoise = 'pedra'; break
      case 1: computerChoise = 'papel'; break
      case 2: computerChoise = 'tesoura'; break
    }

    let result = ''

    if ( computerChoise === 'pedra' ){
      if ( userChoise === 'pedra' ) result = 'Empate'
      if ( userChoise === 'papel' ) result = 'Usuario ganhou'
      if ( userChoise === 'tesoura' ) result = 'Computador ganhou'
    }

    if ( computerChoise === 'papel' ){
      if ( userChoise === 'pedra' ) result = 'Computador ganhou'
      if ( userChoise === 'papel' ) result = 'Empate'
      if ( userChoise === 'tesoura' ) result = 'Usuario ganhou'
    }

    if ( computerChoise === 'tesoura' ){
      if ( userChoise === 'pedra' ) result = 'Usuario ganhou'
      if ( userChoise === 'papel' ) result = 'Computador ganhou'
      if ( userChoise === 'tesoura' ) result = 'Empate'
    }

    this.setState({
      ...this.state,
      userChoise: userChoise,
      computerChoise: computerChoise,
      result: result
    })
  }

  render() {
    return (
      <View>
        <StatusBar
         backgroundColor={ '#2196F3' }
         barStyle="light-content" />

        <Topo></Topo>

        <View style={ styles.actionPanel }>
          <View><Button style={ styles.choiseButton } title="Pedra" onPress={ () => this.jokenpo('pedra') } /></View>
          <View><Button style={ styles.choiseButton } title="Papel" onPress={ () => this.jokenpo('papel') } /></View>
          <View><Button style={ styles.choiseButton } title="Tesoura" onPress={ () => this.jokenpo('tesoura') } /></View>
        </View>

        <View style={ styles.stage }>
          <Text>Escolha do computador: { this.state.computerChoise == '' ? 'Nenhuma escolha' : this.state.computerChoise }</Text>
          <Text>Escolha do usuario: { this.state.userChoise == '' ? 'Nenhuma escolha' : this.state.userChoise }</Text>
          <Text style={ styles.resultText }>{ this.state.result }</Text>
        </View>
      </View>
    );
  }
}

export class Topo extends Component {
  render(){
    return (
      <View>
        <Image style={ styles.headerImage } source={ require('./images/jokenpo.png') } />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerImage: {
    width: '100%'
  },
  choiseButton: {
    width: 90
  },
  actionPanel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
    marginHorizontal: 20
  },
  stage: {
    alignItems: 'center',
    marginVertical: 20
  },
  resultText: {
    fontSize: 20,
    color: 'red',
    marginTop: 10,
    color: '#2196F3'
  }
})

AppRegistry.registerComponent('jokenpo', () => jokenpo);
