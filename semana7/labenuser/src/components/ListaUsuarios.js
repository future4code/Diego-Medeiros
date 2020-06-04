import React from "react";
import axios from "axios";
import styled from "styled-components";

const Lista = styled.div`
  display: flex;
  background-color: black;
  color: white;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: column;
`;

class ListaUsuarios extends React.Component {
  state = {
    listaDeUsuarios: [],
  };

  componentDidMount() {
    this.pegaUsers();
  }

  pegaUsers = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",

        {
          headers: {
            Authorization: "diego-messias-mello",
          },
        }
      )
      .then((resposta) => {
        this.setState({ listaDeUsuarios: resposta.data });
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  deletarUsuario = (idUsuario) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
        {
          headers: {
            Authorization: "diego-messias-mello",
          },
        }
      )
      .then(() => {
        alert("Usuário deletado com sucesso");
        this.pegaUsers();
      })
      .catch((erro) => {
        alert("Usuário não criado");
        console.log(erro);
      });
  };

  render() {
    return (
      <Lista>
        <button onClick={this.props.botaoVoltar}>Voltar</button>
        <div>
          {this.state.listaDeUsuarios.length === 0 && <div>Carregando...</div>}
          {this.state.listaDeUsuarios.map((usuario) => {
            return (
              <li>
                {usuario.name}
                <br></br>
                <button onClick={() => this.deletarUsuario(usuario.id)}>
                  Excluir
                </button>
              </li>
            );
          })}
        </div>
      </Lista>
    );
  }
}

export default ListaUsuarios;
