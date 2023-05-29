import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';

import React from 'react';
export interface propsFBoton {
  estiloBoton: ViewStyle;
  estiloTexto: any;
  texto: string;
  accion: () => void;
}
const Fboton = (props: propsFBoton) => {
  return (
    <TouchableOpacity onPress={props.accion}>
      <View style={props.estiloBoton}>
        <Text style={props.estiloTexto}>{props.texto}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Fboton;
