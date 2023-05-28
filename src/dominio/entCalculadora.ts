import {InputCalculadora, OutputCalculadora} from './modelos';

class EntCalculadora {
  private entrada: InputCalculadora;
  private respuesta: OutputCalculadora;

  constructor() {
    this.entrada = {
      tipo: false,
      operando: '0',
    };
    this.respuesta = {
      operar: '',
      numeroUno: '0',
      numeroDos: '0',
    };
  }
}

export default EntCalculadora;
