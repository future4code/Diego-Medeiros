import React from "react";
import axios from "axios";
import styled from "styled-components";
const prk = "148fd85d0b84d9cc07937c5b98afc93135a4bbd8";
const puk = "80ea92bee352a31285f91a69cc363ee0";

const Marvel = styled.div`
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

class App extends React.Component {
  state = {
    herois: [],
    nomeHeroi: "",
  };

  listaMarvel = () => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${puk}&hash=f7a11e2810d03eb2a2ca83fc09c40557&nameStartsWith=${this.state.nomeHeroi}&limit=100`
      )
      .then((response) => {
        this.setState({ herois: response.data.data.results, nomeHeroi: "" });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  nomeDigitado = (event) => {
    const novoNomeDigitado = event.target.value;

    this.setState({ nomeHeroi: novoNomeDigitado });
  };

  render() {
    const nomesHerois = this.state.herois.map((nomesHerois) => {
      return <p key={nomesHerois.id}>{nomesHerois.name}</p>;
    });

    return (
      <Marvel>
        <h1>BUSQUE HERÓIS DA MARVEL</h1>

        <input
          placeholder="Digite Herói para Buscar"
          value={this.state.nomeHeroi}
          onChange={this.nomeDigitado}
        ></input>
        <button onClick={this.listaMarvel}>BUSCAR HERÓI</button>
        <strong>{nomesHerois}</strong>
      </Marvel>
    );
  }
}

export default App;
