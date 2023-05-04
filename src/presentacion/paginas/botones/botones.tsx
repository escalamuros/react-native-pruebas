import React, {Component} from 'react';
import {SafeAreaView, Button, View, Text, Image} from 'react-native';
import estilo from './estilo';

interface propsBotones {
  maximo: number;
}
interface estadoBotones {
  maullar: boolean;
  texto: string;
  contadorCaricias: number;
}
class BotonesClase extends Component<propsBotones, estadoBotones> {
  private maximoCaricias: number;
  constructor(props: propsBotones) {
    super(props);
    this.state = {
      maullar: false,
      texto: 'Acariciame!',
      contadorCaricias: 0,
    };
    this.maximoCaricias = this.props.maximo;
  }

  accionMaullar() {
    if (this.state.contadorCaricias < this.maximoCaricias) {
      this.setState({
        maullar: true,
        texto: 'MIAUUUU!!!',
        contadorCaricias: this.state.contadorCaricias + 1,
      });
      setTimeout(() => {
        this.setState({
          maullar: false,
          texto: 'Acariciame!',
          contadorCaricias: this.state.contadorCaricias,
        });
      }, 2000);
    } else {
      this.setState({
        maullar: true,
        texto: 'JJJJJJJJJJ >.<',
        contadorCaricias: this.maximoCaricias,
      });
    }
  }

  render(): JSX.Element {
    return (
      <SafeAreaView style={estilo.cajaCompleta}>
        <View style={estilo.cajaCentral}>
          <Image
            style={estilo.cajaCentral__imagen}
            source={{
              uri: 'https://reactnative.dev/docs/assets/p_cat1.png',
            }}
          />
          <Button
            onPress={() => {
              this.accionMaullar();
            }}
            disabled={this.state.maullar}
            title={this.state.texto}
          />
          <Text style={estilo.cajaCentral__texto}>Soy un Gato</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default BotonesClase;
