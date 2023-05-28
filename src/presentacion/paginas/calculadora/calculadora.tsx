import React, {Component} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import estilo from './estilo';
import {OutputCalculadora} from '../../../dominio/modelos';

interface PropsCalculadora {}
class Calculadora extends Component<PropsCalculadora, OutputCalculadora> {
  constructor(props: PropsCalculadora) {
    super(props);
    this.state = {
      numeroUno: '0',
      numeroDos: '0',
      operar: '',
    };
  }

  calcular(valor: string): void {
    console.log(valor);
    switch (valor) {
      case 'del':
        let largo = 1;
        if (this.state.numeroUno.slice(0, 1) == '-') {
          largo = 2;
        }
        if (this.state.numeroUno.length > largo) {
          this.setState({
            operar: this.state.operar,
            numeroUno: this.state.numeroUno.substring(
              0,
              this.state.numeroUno.length - 1,
            ),
            numeroDos: this.state.numeroDos,
          });
        } else {
          this.setState({
            operar: this.state.operar,
            numeroUno: '0',
            numeroDos: this.state.numeroDos,
          });
        }
        break;
      case 'delTodo':
        this.setState({
          operar: '',
          numeroUno: '0',
          numeroDos: '0',
        });
        break;
      case 'signo':
        let num = this.state.numeroUno;
        if (num == '0') {
          //no hace nada
        } else {
          if (num.slice(0, 1) == '-') {
            num = num.substring(1);
          } else {
            num = '-' + num;
          }
          this.setState({
            operar: this.state.operar,
            numeroUno: num,
            numeroDos: this.state.numeroDos,
          });
        }
        break;
      case 'suma':
        if (this.state.numeroDos == '0') {
          this.setState({
            numeroDos: this.state.numeroUno,
            numeroUno: '0',
            operar: '+',
          });
        } else {
          if (this.state.operar == '') {
            this.setState({
              numeroDos: this.state.numeroDos,
              numeroUno: this.state.numeroUno,
              operar: '+',
            });
          } else {
            this.realizarOperacionActualY('+');
          }
        }
        break;
      case 'resta':
        if (this.state.numeroDos == '0') {
          this.setState({
            numeroDos: this.state.numeroUno,
            numeroUno: '0',
            operar: '-',
          });
        } else {
          if (this.state.operar == '') {
            this.setState({
              numeroDos: this.state.numeroDos,
              numeroUno: this.state.numeroUno,
              operar: '-',
            });
          } else {
            this.realizarOperacionActualY('-');
          }
        }
        break;
      case 'cuadrado':
        let n = parseFloat(this.state.numeroUno.replace(',', '.'));
        n = n * n;
        let nume = n.toFixed(10).toString().replace('.', ',');
        nume = this.quitarCerosFinales(nume);
        this.setState({
          numeroDos: this.state.numeroDos,
          numeroUno: nume,
          operar: this.state.operar,
        });
        break;
      case 'multiplica':
        if (this.state.numeroDos == '0') {
          this.setState({
            numeroDos: this.state.numeroUno,
            numeroUno: '0',
            operar: '*',
          });
        } else {
          if (this.state.operar == '') {
            this.setState({
              numeroDos: this.state.numeroDos,
              numeroUno: this.state.numeroUno,
              operar: '*',
            });
          } else {
            this.realizarOperacionActualY('*');
          }
        }
        break;
      case 'divide':
        if (this.state.numeroDos == '0') {
          this.setState({
            numeroDos: this.state.numeroUno,
            numeroUno: '0',
            operar: '/',
          });
        } else {
          if (this.state.operar == '') {
            this.setState({
              numeroDos: this.state.numeroDos,
              numeroUno: this.state.numeroUno,
              operar: '/',
            });
          } else {
            this.realizarOperacionActualY('/');
          }
        }
        break;
      case 'raiz':
        if (this.state.numeroUno.includes('-')) {
          //no saca raiz
        } else {
          let n2 = parseFloat(this.state.numeroUno.replace(',', '.'));
          n2 = Math.sqrt(n2);
          let nume2 = n2.toFixed(10).toString().replace('.', ',');
          nume2 = this.quitarCerosFinales(nume2);
          this.setState({
            numeroDos: this.state.numeroDos,
            numeroUno: nume2,
            operar: this.state.operar,
          });
        }
        break;
      case 'porcentaje':
        if (this.state.numeroDos == '0') {
          this.setState({
            numeroDos: this.state.numeroUno,
            numeroUno: '0',
            operar: '%',
          });
        } else {
          if (this.state.operar == '') {
            this.setState({
              numeroDos: this.state.numeroDos,
              numeroUno: this.state.numeroUno,
              operar: '%',
            });
          } else {
            this.realizarOperacionActualY('%');
          }
        }
        break;
      case 'entero':
        let nume4 = this.state.numeroUno;
        if (nume4.includes(',')) {
          nume4 = nume4.substring(0, nume4.indexOf(','));
          this.setState({
            numeroDos: this.state.numeroDos,
            numeroUno: nume4,
            operar: this.state.operar,
          });
        } else {
          //no hace nada
        }
        break;
      case 'igual':
        if (this.state.numeroDos == '0' || this.state.operar == '') {
          //no hace nada
        } else {
          this.realizarOperacionActualY('');
        }
        break;
    }
  }
  realizarOperacionActualY(nuevaOperacion: string) {
    let nuno;
    let ndos;
    let res = '';
    nuno = parseFloat(this.state.numeroUno.replace(',', '.'));
    ndos = parseFloat(this.state.numeroDos.replace(',', '.'));
    switch (this.state.operar) {
      case '+':
        res = (ndos + nuno).toFixed(10).toString().replace('.', ',');
        res = this.quitarCerosFinales(res);
        break;
      case '-':
        res = (ndos - nuno).toFixed(10).toString().replace('.', ',');
        res = this.quitarCerosFinales(res);
        break;
      case '*':
        res = (ndos * nuno).toFixed(10).toString().replace('.', ',');
        res = this.quitarCerosFinales(res);
        break;
      case '/':
        res = (ndos / nuno).toFixed(10).toString().replace('.', ',');
        res = this.quitarCerosFinales(res);
        break;
      case '%':
        res = ((ndos * nuno) / 100).toFixed(10).toString().replace('.', ',');
        res = this.quitarCerosFinales(res);
        break;
      case '':
        //nada
        break;
    }
    this.setState({
      numeroDos: res,
      numeroUno: '0',
      operar: nuevaOperacion,
    });
  }
  quitarCerosFinales(numero: string): string {
    if (numero.includes(',')) {
      for (let i = numero.length - 1; i >= 0; i--) {
        if (numero[i] == '0') {
          numero = numero.substring(0, numero.length - 1);
        } else if (numero[i] == ',') {
          numero = numero.substring(0, numero.length - 1);
          break;
        } else {
          break;
        }
      }
      if (numero == '') {
        numero = '0';
      }
      return numero;
    } else {
      return numero;
    }
  }
  digitarComa(): void {
    let num;
    num = this.state.numeroUno;
    if (num.includes(',')) {
      // no agrega coma
    } else {
      num = num + ',';
      this.setState({
        numeroUno: num,
        numeroDos: this.state.numeroDos,
        operar: this.state.operar,
      });
    }
  }
  digitarNumero(numero: string): void {
    let num;
    num = this.state.numeroUno;
    if (num == '0' && (numero == '0' || numero == 'doble')) {
      //no hacer nada
    } else {
      if (num == '0') {
        num = '';
      }
      if (numero == 'doble') {
        num = num + '00';
      } else {
        num = num + numero;
      }
      this.setState({
        numeroUno: num,
        numeroDos: this.state.numeroDos,
        operar: this.state.operar,
      });
    }
  }
  render() {
    return (
      <View style={estilo.cajaCompleta}>
        <View style={estilo.pantalla}>
          <Text style={estilo.textoSuperior}>{this.state.numeroDos}</Text>
          <Text style={estilo.textoSuperior}>{this.state.operar}</Text>
          <Text style={estilo.textoCentral}>{this.state.numeroUno}</Text>
        </View>
        <View style={estilo.teclado}>
          <View style={estilo.linea}>
            <TouchableOpacity onPress={() => this.digitarNumero('7')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>7</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.digitarNumero('8')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>8</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.digitarNumero('9')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>9</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('signo')}>
              <View style={estilo.caja2}>
                <Text style={estilo.textoBoton}>±</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('del')}>
              <View style={estilo.caja2}>
                <Text style={estilo.textoBoton}>»</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('delTodo')}>
              <View style={estilo.caja2}>
                <Text style={estilo.textoBoton}>Φ</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={estilo.linea}>
            <TouchableOpacity onPress={() => this.digitarNumero('4')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>4</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.digitarNumero('5')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>5</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.digitarNumero('6')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>6</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('suma')}>
              <View style={estilo.caja3}>
                <Text style={estilo.textoBoton}>+</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('resta')}>
              <View style={estilo.caja3}>
                <Text style={estilo.textoBoton}>-</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('cuadrado')}>
              <View style={estilo.caja3}>
                <Text style={estilo.textoBoton}>²</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={estilo.linea}>
            <TouchableOpacity onPress={() => this.digitarNumero('1')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>1</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.digitarNumero('2')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>2</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.digitarNumero('3')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>3</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('multiplica')}>
              <View style={estilo.caja3}>
                <Text style={estilo.textoBoton}>*</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('divide')}>
              <View style={estilo.caja3}>
                <Text style={estilo.textoBoton}>/</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('raiz')}>
              <View style={estilo.caja3}>
                <Text style={estilo.textoBoton}>√</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={estilo.linea}>
            <TouchableOpacity onPress={() => this.digitarNumero('0')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>0</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.digitarNumero('doble')}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>00</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.digitarComa()}>
              <View style={estilo.caja1}>
                <Text style={estilo.textoBoton}>,</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('porcentaje')}>
              <View style={estilo.caja3}>
                <Text style={estilo.textoBoton}>%</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('entero')}>
              <View style={estilo.caja3}>
                <Text style={estilo.textoBoton}>Ϡ</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.calcular('igual')}>
              <View style={estilo.caja3}>
                <Text style={estilo.textoBoton}>=</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default Calculadora;
