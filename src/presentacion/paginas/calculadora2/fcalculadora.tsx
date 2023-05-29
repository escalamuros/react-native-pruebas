import React from 'react';
import {Text, View} from 'react-native';
import estilo from './estilo';
import useCalculadora from '../../../aplicacion/casosDeUso/useCalculadora';
import Fboton from './componente/fboton';
//import {OutputCalculadora} from '../../../dominio/modelos';

const Fcalculadora = () => {
  const {digitarNumero, digitarComa, calcular, output} = useCalculadora();
  return (
    <View style={estilo.cajaCompleta}>
      <View style={estilo.pantalla}>
        <Text style={estilo.textoSuperior}>{output.numeroDos}</Text>
        <Text style={estilo.textoSuperior}>{output.operar}</Text>
        <Text style={estilo.textoCentral}>{output.numeroUno}</Text>
      </View>
      <View style={estilo.teclado}>
        <View style={estilo.linea}>
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'7'}
            accion={() => {
              digitarNumero('7');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'8'}
            accion={() => {
              digitarNumero('8');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'9'}
            accion={() => {
              digitarNumero('9');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion1}
            estiloTexto={estilo.textoBoton}
            texto={'±'}
            accion={() => {
              calcular('signo');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion1}
            estiloTexto={estilo.textoBotonChico}
            texto={'Borrar'}
            accion={() => {
              calcular('del');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion1}
            estiloTexto={estilo.textoBotonChico}
            texto={'Limpiar'}
            accion={() => {
              calcular('delTodo');
            }}
          />
        </View>
        <View style={estilo.linea}>
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'4'}
            accion={() => {
              digitarNumero('4');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'5'}
            accion={() => {
              digitarNumero('5');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'6'}
            accion={() => {
              digitarNumero('6');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion1}
            estiloTexto={estilo.textoBotonChico}
            texto={'x²'}
            accion={() => {
              calcular('cuadrado');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion1}
            estiloTexto={estilo.textoBotonChico}
            texto={'√x'}
            accion={() => {
              calcular('raiz');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion1}
            estiloTexto={estilo.textoBotonChico}
            texto={'|x|'}
            accion={() => {
              calcular('entero');
            }}
          />
        </View>
        <View style={estilo.linea}>
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'1'}
            accion={() => {
              digitarNumero('1');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'2'}
            accion={() => {
              digitarNumero('2');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'3'}
            accion={() => {
              digitarNumero('3');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion2}
            estiloTexto={estilo.textoBoton}
            texto={'+'}
            accion={() => {
              calcular('suma');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion2}
            estiloTexto={estilo.textoBoton}
            texto={'*'}
            accion={() => {
              calcular('multiplica');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion2}
            estiloTexto={estilo.textoBoton}
            texto={'%'}
            accion={() => {
              calcular('porcentaje');
            }}
          />
        </View>
        <View style={estilo.linea}>
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'0'}
            accion={() => {
              digitarNumero('0');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={'00'}
            accion={() => {
              digitarNumero('doble');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonNumero}
            estiloTexto={estilo.textoBoton}
            texto={','}
            accion={() => {
              digitarComa();
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion2}
            estiloTexto={estilo.textoBoton}
            texto={'-'}
            accion={() => {
              calcular('resta');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion2}
            estiloTexto={estilo.textoBoton}
            texto={'/'}
            accion={() => {
              calcular('divide');
            }}
          />
          <Fboton
            estiloBoton={estilo.botonOperacion2}
            estiloTexto={estilo.textoBoton}
            texto={'='}
            accion={() => {
              calcular('igual');
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default Fcalculadora;
