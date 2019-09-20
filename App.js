import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Button from './src/components/Button'
import Display from './src/components/Display'

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operacao: null,
  values: [0, 0],
  current: 0
}

export default class App extends Component {

  state = { ...initialState }

  //Adiciona um dígito
  addDigito = n => {

    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay
    if (n === '.' && !clearDisplay && this.state.displayValue.includes('.')) {
      return
    }
    const currentValue = clearDisplay ? '' : this.state.displayValue
    const displayValue = currentValue + n
    this.setState({ displayValue, clearDisplay: false })

    if (n !== '.') {
      const newValue = parseFloat(displayValue)
      const values = [...this.state.values]
      values[this.state.current] = newValue
      this.setState({values})
    }
  }

  //Limpa memória
  clearMemoria = () => {
    this.setState({ ...initialState })
  }

  //Seta operação
  setOperacao = operacao => {
    if (this.state.current === 0) {
      this.setState({ operacao, current: 1, clearDisplay: true })
    } else {
      const equals = operacao === '='
      const values = [...this.state.values]
      try {
        values[0] = eval(`${values[0]} ${this.state.operacao} ${values[1]}`)
      } catch (e) {
        values[0] = this.state.values[0]
      }

      values[1] = 0
      this.setState({
        displayValue: `${values[0]}`,
        operacao: equals ? null : operacao,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values,

      })
    }
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
          <Button label='0' double onClick={this.addDigito} />
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
