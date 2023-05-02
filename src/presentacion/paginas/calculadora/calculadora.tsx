import React, {Component} from 'react';
import {Text, View} from 'react-native';
import estilo from './estilo';
class Calculadora extends Component {
  render() {
    return (
      <View style={estilo.cajaCompleta}>
        <View style={estilo.caja1}>
          <Text style={estilo.textoCentral}>A</Text>
        </View>
        <View style={estilo.caja2}>
          <Text style={estilo.textoCentral}>B</Text>
        </View>
        <View style={estilo.caja3}>
          <Text style={estilo.textoCentral}>C</Text>
        </View>
      </View>
    );
  }
}

export default Calculadora;
