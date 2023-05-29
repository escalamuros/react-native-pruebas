import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import estilo from './estilo';
//import {OutputCalculadora} from '../../../dominio/modelos';

const Fcalculadora = () => {
  const [output, setOutput] = useState({
    numeroUno: '0',
    numeroDos: '0',
    operar: '',
  });
  const calcular = (valor: string): void => {
    switch (valor) {
      case 'del':
        let largo = 1;
        if (output.numeroUno.slice(0, 1) === '-') {
          largo = 2;
        }
        if (output.numeroUno.length > largo) {
          setOutput({
            operar: output.operar,
            numeroUno: output.numeroUno.substring(
              0,
              output.numeroUno.length - 1,
            ),
            numeroDos: output.numeroDos,
          });
        } else {
          setOutput({
            operar: output.operar,
            numeroUno: '0',
            numeroDos: output.numeroDos,
          });
        }
        break;
      case 'delTodo':
        setOutput({
          operar: '',
          numeroUno: '0',
          numeroDos: '0',
        });
        break;
      case 'signo':
        let num = output.numeroUno;
        if (num === '0') {
          //no hace nada
        } else {
          if (num.slice(0, 1) === '-') {
            num = num.substring(1);
          } else {
            num = '-' + num;
          }
          setOutput({
            operar: output.operar,
            numeroUno: num,
            numeroDos: output.numeroDos,
          });
        }
        break;
      case 'suma':
        if (output.numeroDos === '0') {
          setOutput({
            numeroDos: output.numeroUno,
            numeroUno: '0',
            operar: '+',
          });
        } else {
          if (output.operar === '') {
            setOutput({
              numeroDos: output.numeroDos,
              numeroUno: output.numeroUno,
              operar: '+',
            });
          } else {
            realizarOperacionActualY('+');
          }
        }
        break;
      case 'resta':
        if (output.numeroDos === '0') {
          setOutput({
            numeroDos: output.numeroUno,
            numeroUno: '0',
            operar: '-',
          });
        } else {
          if (output.operar === '') {
            setOutput({
              numeroDos: output.numeroDos,
              numeroUno: output.numeroUno,
              operar: '-',
            });
          } else {
            realizarOperacionActualY('-');
          }
        }
        break;
      case 'cuadrado':
        let n = parseFloat(output.numeroUno.replace(',', '.'));
        n = n * n;
        let nume = n.toFixed(10).toString().replace('.', ',');
        nume = quitarCerosFinales(nume);
        setOutput({
          numeroDos: output.numeroDos,
          numeroUno: nume,
          operar: output.operar,
        });
        break;
      case 'multiplica':
        if (output.numeroDos === '0') {
          setOutput({
            numeroDos: output.numeroUno,
            numeroUno: '0',
            operar: '*',
          });
        } else {
          if (output.operar === '') {
            setOutput({
              numeroDos: output.numeroDos,
              numeroUno: output.numeroUno,
              operar: '*',
            });
          } else {
            realizarOperacionActualY('*');
          }
        }
        break;
      case 'divide':
        if (output.numeroDos === '0') {
          setOutput({
            numeroDos: output.numeroUno,
            numeroUno: '0',
            operar: '/',
          });
        } else {
          if (output.operar === '') {
            setOutput({
              numeroDos: output.numeroDos,
              numeroUno: output.numeroUno,
              operar: '/',
            });
          } else {
            realizarOperacionActualY('/');
          }
        }
        break;
      case 'raiz':
        if (output.numeroUno.includes('-')) {
          //no saca raiz
        } else {
          let n2 = parseFloat(output.numeroUno.replace(',', '.'));
          n2 = Math.sqrt(n2);
          let nume2 = n2.toFixed(10).toString().replace('.', ',');
          nume2 = quitarCerosFinales(nume2);
          setOutput({
            numeroDos: output.numeroDos,
            numeroUno: nume2,
            operar: output.operar,
          });
        }
        break;
      case 'porcentaje':
        if (output.numeroDos === '0') {
          setOutput({
            numeroDos: output.numeroUno,
            numeroUno: '0',
            operar: '%',
          });
        } else {
          if (output.operar === '') {
            setOutput({
              numeroDos: output.numeroDos,
              numeroUno: output.numeroUno,
              operar: '%',
            });
          } else {
            realizarOperacionActualY('%');
          }
        }
        break;
      case 'entero':
        let nume4 = output.numeroUno;
        if (nume4.includes(',')) {
          nume4 = nume4.substring(0, nume4.indexOf(','));
          setOutput({
            numeroDos: output.numeroDos,
            numeroUno: nume4,
            operar: output.operar,
          });
        } else {
          //no hace nada
        }
        break;
      case 'igual':
        if (output.numeroDos === '0' || output.operar === '') {
          //no hace nada
        } else {
          realizarOperacionActualY('');
        }
        break;
    }
  };
  const realizarOperacionActualY = (nuevaOperacion: string): void => {
    let nuno;
    let ndos;
    let res = '';
    nuno = parseFloat(output.numeroUno.replace(',', '.'));
    ndos = parseFloat(output.numeroDos.replace(',', '.'));
    switch (output.operar) {
      case '+':
        res = (ndos + nuno).toFixed(10).toString().replace('.', ',');
        res = quitarCerosFinales(res);
        break;
      case '-':
        res = (ndos - nuno).toFixed(10).toString().replace('.', ',');
        res = quitarCerosFinales(res);
        break;
      case '*':
        res = (ndos * nuno).toFixed(10).toString().replace('.', ',');
        res = quitarCerosFinales(res);
        break;
      case '/':
        res = (ndos / nuno).toFixed(10).toString().replace('.', ',');
        res = quitarCerosFinales(res);
        break;
      case '%':
        res = ((ndos * nuno) / 100).toFixed(10).toString().replace('.', ',');
        res = quitarCerosFinales(res);
        break;
      case '':
        //nada
        break;
    }
    setOutput({
      numeroDos: res,
      numeroUno: '0',
      operar: nuevaOperacion,
    });
  };
  const quitarCerosFinales = (numero: string): string => {
    if (numero.includes(',')) {
      for (let i = numero.length - 1; i >= 0; i--) {
        if (numero[i] === '0') {
          numero = numero.substring(0, numero.length - 1);
        } else if (numero[i] === ',') {
          numero = numero.substring(0, numero.length - 1);
          break;
        } else {
          break;
        }
      }
      if (numero === '') {
        numero = '0';
      }
      return numero;
    } else {
      return numero;
    }
  };
  const digitarComa = (): void => {
    let num;
    num = output.numeroUno;
    if (num.includes(',')) {
      // no agrega coma
    } else {
      num = num + ',';
      setOutput({
        numeroUno: num,
        numeroDos: output.numeroDos,
        operar: output.operar,
      });
    }
  };
  const digitarNumero = (numero: string): void => {
    let num;
    num = output.numeroUno;
    if (num === '0' && (numero === '0' || numero === 'doble')) {
      //no hacer nada
    } else {
      if (num === '0') {
        num = '';
      }
      if (numero === 'doble') {
        num = num + '00';
      } else {
        num = num + numero;
      }
      setOutput({
        numeroUno: num,
        numeroDos: output.numeroDos,
        operar: output.operar,
      });
    }
  };

  return (
    <View style={estilo.cajaCompleta}>
      <View style={estilo.pantalla}>
        <Text style={estilo.textoSuperior}>{output.numeroDos}</Text>
        <Text style={estilo.textoSuperior}>{output.operar}</Text>
        <Text style={estilo.textoCentral}>{output.numeroUno}</Text>
      </View>
      <View style={estilo.teclado}>
        <View style={estilo.linea}>
          <TouchableOpacity onPress={() => digitarNumero('7')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>7</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => digitarNumero('8')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>8</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => digitarNumero('9')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>9</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('signo')}>
            <View style={estilo.botonOperacion1}>
              <Text style={estilo.textoBoton}>±</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('del')}>
            <View style={estilo.botonOperacion1}>
              <Text style={estilo.textoBotonChico}>Borra</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('delTodo')}>
            <View style={estilo.botonOperacion1}>
              <Text style={estilo.textoBotonChico}>Limpia</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={estilo.linea}>
          <TouchableOpacity onPress={() => digitarNumero('4')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>4</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => digitarNumero('5')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>5</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => digitarNumero('6')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>6</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('cuadrado')}>
            <View style={estilo.botonOperacion1}>
              <Text style={estilo.textoBotonChico}>x²</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('raiz')}>
            <View style={estilo.botonOperacion1}>
              <Text style={estilo.textoBotonChico}>√x</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('entero')}>
            <View style={estilo.botonOperacion1}>
              <Text style={estilo.textoBotonChico}>|x|</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={estilo.linea}>
          <TouchableOpacity onPress={() => digitarNumero('1')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>1</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => digitarNumero('2')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>2</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => digitarNumero('3')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>3</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('suma')}>
            <View style={estilo.botonOperacion2}>
              <Text style={estilo.textoBoton}>+</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('multiplica')}>
            <View style={estilo.botonOperacion2}>
              <Text style={estilo.textoBoton}>*</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('porcentaje')}>
            <View style={estilo.botonOperacion2}>
              <Text style={estilo.textoBoton}>%</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={estilo.linea}>
          <TouchableOpacity onPress={() => digitarNumero('0')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>0</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => digitarNumero('doble')}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>00</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => digitarComa()}>
            <View style={estilo.botonNumero}>
              <Text style={estilo.textoBoton}>,</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('resta')}>
            <View style={estilo.botonOperacion2}>
              <Text style={estilo.textoBoton}>-</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('divide')}>
            <View style={estilo.botonOperacion2}>
              <Text style={estilo.textoBoton}>/</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => calcular('igual')}>
            <View style={estilo.botonOperacion2}>
              <Text style={estilo.textoBoton}>=</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Fcalculadora;
