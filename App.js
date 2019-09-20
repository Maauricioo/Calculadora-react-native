import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

export default class App extends Component {

  state = {
    displayValue: '0'
  }

  addDigito = n => {
    this.setState({ displayValue: n })
  }

  clearMemoria = () => {
    this.setState({ displayValue: '0' })
  }

  setOperacao = operacao => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Display value={this.state.displayValue} />
        <View style={styles.buttons}>
          <Button label='AC' triple onClick={this.clearMemoria} />
          <Button label='/' operacao onClick={this.setOperacao} />
          <Button label='7' onClick={this.addDigito} />
          <Button label='8' onClick={this.addDigito} />
          <Button label='9' onClick={this.addDigito} />
          <Button label='*' operacao onClick={this.setOperacao} />
          <Button label='4' onClick={this.addDigito} />
          <Button label='5' onClick={this.addDigito} />
          <Button label='6' onClick={this.addDigito} />
          <Button label='-' operacao onClick={this.setOperacao} />
          <Button label='1' onClick={this.addDigito} />
          <Button label='2' onClick={this.addDigito} />
          <Button label='3' onClick={this.addDigito} />
          <Button label='+' operacao onClick={this.setOperacao} />
          <Button label='0' double onClick={this.addDigito}  />
          <Button label='.' onClick={this.addDigito} />
          <Button label='=' operacao onClick={this.setOperacao} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})
