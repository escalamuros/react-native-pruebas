import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  cajaCompleta: {
    flex: 1,
    backgroundColor: '#234353',
    flexDirection: 'column',
  },
  pantalla: {
    flex: 1,
    backgroundColor: '#e87707',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 10,
  },
  textoSuperior: {
    fontSize: 40,
    color: 'rgba(255,255,255,1)',
  },
  textoCentral: {
    fontSize: 35,
    color: 'rgba(255,255,255,0.7)',
  },
  teclado: {
    flex: 3,
    backgroundColor: '#742179',
    flexDirection: 'column',
    padding: 5,
  },
  linea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  textoBoton: {
    fontSize: 30,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textoBotonChico: {
    fontSize: 15,
    color: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonNumero: {
    width: 60,
    height: 60,
    borderColor: '#ffffff',
    borderWidth: 1,
    backgroundColor: '#8a5bcd',
    borderRadius: 25,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonOperacion1: {
    width: 60,
    height: 60,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#573580',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botonOperacion2: {
    width: 60,
    height: 60,
    borderColor: '#ffffff',
    borderWidth: 1,
    borderRadius: 25,
    backgroundColor: '#7728a7',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default estilo;
