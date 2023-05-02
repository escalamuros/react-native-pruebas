import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
const CajasFuncion = (): JSX.Element => {
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
};
class CajasClase extends Component {
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

const estilo = StyleSheet.create({
  cajaCompleta: {
    flex: 1,
    backgroundColor: '#234353',
    flexDirection: 'column',
  },
  textoCentral: {
    //textAlign: 'center',
    fontSize: 30,
    color: '#ffffff',
  },
  caja1: {
    width: 100,
    height: 100,
    borderColor: '#ffffff',
    borderWidth: 5,
    backgroundColor: '#ff0000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  caja2: {
    width: 100,
    height: 100,
    borderColor: '#ffffff',
    borderWidth: 5,
    backgroundColor: '#00ff00',
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },
  caja3: {
    width: 100,
    height: 100,
    borderColor: '#ffffff',
    borderWidth: 5,
    backgroundColor: '#0000ff',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
});

export default CajasClase;
