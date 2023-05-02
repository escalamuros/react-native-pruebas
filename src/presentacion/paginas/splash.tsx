import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Splash = (): JSX.Element => {
  return (
    <View style={estilo.cajaCompleta}>
      <Text style={estilo.textoCentral}>Splash</Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  cajaCompleta: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#234353',
  },
  textoCentral: {
    fontSize: 40,
    textAlign: 'center',
    color: '#ffffff',
  },
});

export default Splash;
