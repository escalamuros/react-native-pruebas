import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
  cajaCompleta: {
    flex: 1,
    backgroundColor: '#e87707',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  cajaCentral: {
    marginHorizontal: 20,
    borderWidth: 10,
    borderColor: '#c215c7',
    alignItems: 'center',
  },
  cajaCentral__imagen: {
    borderWidth: 5,
    borderColor: '#ffffff',
    width: 200,
    height: 200,
  },
  cajaCentral__texto: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default estilo;
