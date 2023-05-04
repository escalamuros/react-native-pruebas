import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Splash from './src/presentacion/paginas/splash';
import Cajas from './src/presentacion/paginas/cajas';
import Calculadora from './src/presentacion/paginas/calculadora/calculadora';
import Botones from './src/presentacion/paginas/botones/botones';
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
    return <Calculadora />;
  }
}

export default App5;
