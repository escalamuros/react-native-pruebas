import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {configureStore} from '@reduxjs/toolkit';
import Calculadora from './src/presentacion/paginas/calculadora/calculadora';
import calculadoraSlice from './src/dominio/calculadoraSlice';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import Splash from './src/presentacion/paginas/splash';
import Cajas from './src/presentacion/paginas/cajas';
import Botones from './src/presentacion/paginas/botones/botones';
import Fcalculadora from './src/presentacion/paginas/calculadora2/fcalculadora';

const App1 = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Try editing me! 🎉</Text>
    </View>
  );
};

class App2 extends Component {
  render(): JSX.Element {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>Try editing me! 🎉</Text>
      </View>
    );
  }
}

class App3 extends Component {
  render(): JSX.Element {
    return <Splash />;
  }
}

class App4 extends Component {
  render(): JSX.Element {
    return <Cajas />;
  }
}

class App5 extends Component {
  render(): JSX.Element {
    return <Botones maximo={3} />;
  }
}

class App6 extends Component {
  render(): JSX.Element {
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar backgroundColor="black" barStyle="light-content" />
        <Calculadora />
      </SafeAreaView>
    );
  }
}

const App7 = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <Fcalculadora />
    </SafeAreaView>
  );
};

const AppStore = configureStore({
  reducer: {
    calculadora: calculadoraSlice,
  },
});

class App8 extends Component {
  render(): JSX.Element {
    return (
      <Provider store={AppStore}>
        <Calculadora />
      </Provider>
    );
  }
}
/*
store.getState() = obtengo la info del estado de la calculadora
store.dispach(accion) = gatilla a que cambie el store
*/

export default App7;
