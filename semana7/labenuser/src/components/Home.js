import React, { Component } from "react";
import axios from "axios";
import styled from "styled-components";

const Cadastro = styled.div`
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

class Home extends React.Component {
  state = {
    name: "",
    email: "",
  };

  criarUsuarios = () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        body,

        {
          headers: {
            Authorization: "diego-messias-mello",
          },
        }
      )
      .then((resposta) => {
        alert("Usuário criado com sucesso!");
        this.setState({ usuarios: resposta.data });
      })
      .catch((erro) => {
        alert("Usuário não cadastrado");
        console.log(erro);
      });
  };

  digitaNome = (event) => {
    const novoNomeDigitado = event.target.value;

    this.setState({ name: novoNomeDigitado });
  };

  digitaEmail = (event) => {
    const novoEmailDigitado = event.target.value;

    this.setState({ email: novoEmailDigitado });
  };

  render() {
    return (
      <Cadastro>
        <button onClick={this.props.usuarios}>
          Ir para página de lista de usuários
        </button>
        <br></br>
        <label>Nome:</label>
        <input
          type="text"
          value={this.state.name}
          onChange={this.digitaNome}
        ></input>
        <br></br>
        <label>E-mail:</label>
        <input
          type="email"
          value={this.state.email}
          onChange={this.digitaEmail}
        ></input>
        <button onClick={this.criarUsuarios}>Salvar</button>
      </Cadastro>
    );
  }
}

export default Home;
