import React from "react";

// import { Container } from './styles';

function Home(props) {
  return (
    <div>
      <button onclick={props.usuarios}>
        Ir para página de lista de usuários
      </button>
      <br></br>
      <label>Nome:</label>
      <input type="text"></input>
      <br></br>
      <label>E-mail:</label>
      <input type="text"></input>
      <button>Salvar</button>
    </div>
  );
}

export default Home;
