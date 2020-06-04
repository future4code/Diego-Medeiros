
import React from "react";
import "./App.css";
import { Etapa1 } from "./components/Etapa1";
import { Etapa2 } from "./components/Etapa2";
import { Etapa3 } from "./components/Etapa3";
import { Final } from "./components/Final";


class App extends React.Component {
  state = {
    etapa: 1,

  };

  proximaEtapa = (props) => {
    this.setState({ etapa: this.state.etapa + 1 });
    console.log(this.state.etapa);
  };

  renderizaEtapa = () => {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1></Etapa1>;
      case 2:
        return <Etapa2></Etapa2>;
      case 3:
        return <Etapa3></Etapa3>;
      case 4:
        return <Final></Final>;
      default:
    }
  };

  render() {
    return this.state.etapa < 4 ? (
      <div>
        {this.renderizaEtapa()}
        <button onClick={this.proximaEtapa}>Próxima Etapa</button>
      </div>
    ) : (
      <div>{this.renderizaEtapa()}</div>
    );
  }
}


export default App;
