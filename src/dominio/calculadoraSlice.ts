import {createSlice} from '@reduxjs/toolkit';
import {OutputCalculadora} from './modelos';

const estadoInicial: OutputCalculadora = {
  operar: '',
  numeroUno: '0',
  numeroDos: '0',
};

const calculadoraSlice = createSlice({
  name: 'calculadora',
  initialState: estadoInicial,
  reducers: {
    resetear: () => {
      return estadoInicial;
    },
    modificar: (state, action) => {
      return {...state, ...action.payload};
    },
  },
});

export const {resetear} = calculadoraSlice.actions;

export default calculadoraSlice.reducer;
