export interface InputCalculadora {
  tipo: boolean;
  operando: string;
}
export interface OutputCalculadora {
  operar: string;
  numeroUno: string;
  numeroDos: string;
}
export interface AccionCalcular {
  tipo: string;
  payload?: any;
}
