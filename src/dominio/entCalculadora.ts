import {OutputCalculadora} from './modelos';

class EntCalculadora {
  private respuesta: OutputCalculadora;

  constructor(resp: OutputCalculadora) {
    this.respuesta = resp;
  }
  digitarComa(): OutputCalculadora {
    let num;
    num = this.respuesta.numeroUno;
    if (num.includes(',')) {
      // no agrega coma
    } else {
      num = num + ',';
      this.respuesta = {
        numeroUno: num,
        numeroDos: this.respuesta.numeroDos,
        operar: this.respuesta.operar,
      };
    }
    return this.respuesta;
  }
  digitarNumero(digito: string): OutputCalculadora {
    let num;
    num = this.respuesta.numeroUno;
    if (num === '0' && (digito === '0' || digito === 'doble')) {
      //no hacer nada
    } else {
      if (num === '0') {
        num = '';
      }
      if (digito === 'doble') {
        num = num + '00';
      } else {
        num = num + digito;
      }
      this.respuesta = {
        numeroUno: num,
        numeroDos: this.respuesta.numeroDos,
        operar: this.respuesta.operar,
      };
    }
    return this.respuesta;
  }
  calcular(operando: string): OutputCalculadora {
    switch (operando) {
      case 'del':
        let largo = 1;
        if (this.respuesta.numeroUno.slice(0, 1) === '-') {
          largo = 2;
        }
        if (this.respuesta.numeroUno.length > largo) {
          this.respuesta = {
            operar: this.respuesta.operar,
            numeroUno: this.respuesta.numeroUno.substring(
              0,
              this.respuesta.numeroUno.length - 1,
            ),
            numeroDos: this.respuesta.numeroDos,
          };
        } else {
          this.respuesta = {
            operar: this.respuesta.operar,
            numeroUno: '0',
            numeroDos: this.respuesta.numeroDos,
          };
        }
        break;
      case 'delTodo':
        this.respuesta = {
          operar: '',
          numeroUno: '0',
          numeroDos: '0',
        };
        break;
      case 'signo':
        let num = this.respuesta.numeroUno;
        if (num === '0') {
          //no hace nada
        } else {
          if (num.slice(0, 1) === '-') {
            num = num.substring(1);
          } else {
            num = '-' + num;
          }
          this.respuesta = {
            operar: this.respuesta.operar,
            numeroUno: num,
            numeroDos: this.respuesta.numeroDos,
          };
        }
        break;
      case 'suma':
        if (this.respuesta.numeroDos === '0') {
          this.respuesta = {
            numeroDos: this.respuesta.numeroUno,
            numeroUno: '0',
            operar: '+',
          };
        } else {
          if (this.respuesta.operar === '') {
            this.respuesta = {
              numeroDos: this.respuesta.numeroDos,
              numeroUno: this.respuesta.numeroUno,
              operar: '+',
            };
          } else {
            this.realizarOperacionActualY('+');
          }
        }
        break;
      case 'resta':
        if (this.respuesta.numeroDos === '0') {
          this.respuesta = {
            numeroDos: this.respuesta.numeroUno,
            numeroUno: '0',
            operar: '-',
          };
        } else {
          if (this.respuesta.operar === '') {
            this.respuesta = {
              numeroDos: this.respuesta.numeroDos,
              numeroUno: this.respuesta.numeroUno,
              operar: '-',
            };
          } else {
            this.realizarOperacionActualY('-');
          }
        }
        break;
      case 'cuadrado':
        let n = parseFloat(this.respuesta.numeroUno.replace(',', '.'));
        n = n * n;
        let nume = n.toFixed(10).toString().replace('.', ',');
        nume = this.quitarCerosFinales(nume);
        this.respuesta = {
          numeroDos: this.respuesta.numeroDos,
          numeroUno: nume,
          operar: this.respuesta.operar,
        };
        break;
      case 'multiplica':
        if (this.respuesta.numeroDos === '0') {
          this.respuesta = {
            numeroDos: this.respuesta.numeroUno,
            numeroUno: '0',
            operar: '*',
          };
        } else {
          if (this.respuesta.operar === '') {
            this.respuesta = {
              numeroDos: this.respuesta.numeroDos,
              numeroUno: this.respuesta.numeroUno,
              operar: '*',
            };
          } else {
            this.realizarOperacionActualY('*');
          }
        }
        break;
      case 'divide':
        if (this.respuesta.numeroDos === '0') {
          this.respuesta = {
            numeroDos: this.respuesta.numeroUno,
            numeroUno: '0',
            operar: '/',
          };
        } else {
          if (this.respuesta.operar === '') {
            this.respuesta = {
              numeroDos: this.respuesta.numeroDos,
              numeroUno: this.respuesta.numeroUno,
              operar: '/',
            };
          } else {
            this.realizarOperacionActualY('/');
          }
        }
        break;
      case 'raiz':
        if (this.respuesta.numeroUno.includes('-')) {
          //no saca raiz
        } else {
          let n2 = parseFloat(this.respuesta.numeroUno.replace(',', '.'));
          n2 = Math.sqrt(n2);
          let nume2 = n2.toFixed(10).toString().replace('.', ',');
          nume2 = this.quitarCerosFinales(nume2);
          this.respuesta = {
            numeroDos: this.respuesta.numeroDos,
            numeroUno: nume2,
            operar: this.respuesta.operar,
          };
        }
        break;
      case 'porcentaje':
        if (this.respuesta.numeroDos === '0') {
          this.respuesta = {
            numeroDos: this.respuesta.numeroUno,
            numeroUno: '0',
            operar: '%',
          };
        } else {
          if (this.respuesta.operar === '') {
            this.respuesta = {
              numeroDos: this.respuesta.numeroDos,
              numeroUno: this.respuesta.numeroUno,
              operar: '%',
            };
          } else {
            this.realizarOperacionActualY('%');
          }
        }
        break;
      case 'entero':
        let nume4 = this.respuesta.numeroUno;
        if (nume4.includes(',')) {
          nume4 = nume4.substring(0, nume4.indexOf(','));
          this.respuesta = {
            numeroDos: this.respuesta.numeroDos,
            numeroUno: nume4,
            operar: this.respuesta.operar,
          };
        } else {
          //no hace nada
        }
        break;
      case 'igual':
        if (this.respuesta.numeroDos === '0' || this.respuesta.operar === '') {
          //no hace nada
        } else {
          this.realizarOperacionActualY('');
        }
        break;
    }
    return this.respuesta;
  }
  realizarOperacionActualY = (nuevaOperacion: string): void => {
    let nuno;
    let ndos;
    let res = '';
    nuno = parseFloat(this.respuesta.numeroUno.replace(',', '.'));
    ndos = parseFloat(this.respuesta.numeroDos.replace(',', '.'));
    switch (this.respuesta.operar) {
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
    this.respuesta = {
      numeroDos: res,
      numeroUno: '0',
      operar: nuevaOperacion,
    };
  };
  quitarCerosFinales(numero: string): string {
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
  }
}

export default EntCalculadora;
