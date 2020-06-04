import React from "react";
import Home from "./components/Home";
import ListaUsuarios from "./components/ListaUsuarios";
import axios from "axios";

class App extends React.Component {
  state = {
    tela: true,
    usuarios: [],
  };

  mudancaDePagina = () => {
    this.setState({ tela: !this.state.tela });
  };

  funcaoAlerta = () => {
    alert("Eu sou um alert!");
  };

  pegaUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/fc189cea-2439-411a-87b1-f323e9a3ee40",

        {
          headers: {
            Authorization: "diego-messias-mello",
          },

          params: {
            id: "id:fc189cea-2439-411a-87b1-f323e9a3ee40",
          },
        }
      )
      .then((resposta) => {
        this.setState({ usuarios: resposta.data });
      })
      .catch((erro) => {
        console.log(erro);
      });
    console.log(this.state);
  };

  render() {
    if (this.state.tela) {
      return <Home usuarios={this.mudancaDePagina} alerta={this.pegaUsers} />;
    } else {
      return <ListaUsuarios botaoVoltar={this.mudancaDePagina} />;
    }
  }
}

export default App;
