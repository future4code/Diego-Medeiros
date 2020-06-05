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
    nomeHeroi: "Spider",
  };

  listaMarvel = () => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?ts=1&apikey=${puk}&hash=f7a11e2810d03eb2a2ca83fc09c40557&nameStartsWith=${this.state.nomeHeroi}&limit=100`
      )
      .then((response) => {
        console.log(response.data.data.results);
        this.setState({ herois: response.data.data.results });

        console.log(this.state.herois);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const nomesHerois = this.state.herois.map((nomesHerois) => {
      return <p>{nomesHerois.name}</p>;
    });

    return (
      <Marvel>
        <button onClick={this.listaMarvel}>SPIDER-MARVEL</button>
        <strong>{nomesHerois}</strong>
      </Marvel>
    );
  }
}

export default App;
