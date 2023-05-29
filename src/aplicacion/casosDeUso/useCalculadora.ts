import {useState} from 'react';
import EntCalculadora from '../../dominio/entCalculadora';
import {OutputCalculadora} from '../../dominio/modelos';
const useCalculadora = () => {
  const [output, setOutput] = useState({
    numeroUno: '0',
    numeroDos: '0',
    operar: '',
  });

  let entidadCalculadora = new EntCalculadora(output);

  const calcular = (operando: string): void => {
    const outPutCalculadora: OutputCalculadora =
      entidadCalculadora.calcular(operando);
    setOutput(outPutCalculadora);
  };
  const digitarComa = (): void => {
    const outPutCalculadora: OutputCalculadora =
      entidadCalculadora.digitarComa();
    setOutput(outPutCalculadora);
  };
  const digitarNumero = (numero: string): void => {
    const outPutCalculadora: OutputCalculadora =
      entidadCalculadora.digitarNumero(numero);
    setOutput(outPutCalculadora);
  };
  return {calcular, digitarComa, digitarNumero, output};
};
export default useCalculadora;
