import React, { Component } from 'react';

class CicloDeVidaClase extends Component {
  constructor(props) {
    super(props);
    this.state = { contador: 0 };
    // console.log('Constructor');
  }

  componentDidMount() {
    // console.log('componentDidMount');
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
  }

  incrementarContador = () => {
    this.setState({ contador: this.state.contador + 1 });
  };

  render() {
    return (
      <div>
        <h1>Contador: {this.state.contador}</h1>
        <button onClick={this.incrementarContador}>Incrementar</button>
      </div>
    );
  }
}

export default CicloDeVidaClase;