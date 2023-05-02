import React, {Component} from 'react';
import {SafeAreaView, Button, View, Text, Image} from 'react-native';
import estilo from './estilo';

class Botones extends Component {
  private textoBoton: string;
  private contadorCaricias: number;
  private maximoCaricias: number;
  constructor(props: boolean) {
    super(props);
    this.state = {
      maullar: false,
    };
    this.textoBoton = 'Acariciame!';
    this.contadorCaricias = 0;
    this.maximoCaricias = 3;
  }

  accionMaullar() {
    if (this.contadorCaricias < this.maximoCaricias) {
      this.textoBoton = 'MIAUUUU!!!';
      this.setState({
        maullar: true,
      });
      this.contadorCaricias++;
      setTimeout(() => {
        this.textoBoton = 'Acariciame!';
        this.setState({
          maullar: false,
        });
      }, 2000);
    } else {
      this.textoBoton = 'JJJJJJJJJJ >.<';
      this.setState({
        maullar: true,
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
            title={this.textoBoton}
          />
          <Text style={estilo.cajaCentral__texto}>Soy un Gato</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Botones;
