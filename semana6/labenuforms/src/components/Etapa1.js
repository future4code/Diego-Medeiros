import React from "react";
import styled from "styled-components";
import { PerguntaAberta } from "./PerguntaAberta";
import { PerguntaFechada } from "./PerguntaFechada";

const ContainerEtapa1 = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export class Etapa1 extends React.Component {
  render() {
    return (
      <ContainerEtapa1>
        <h1>ETAPA1 - DADOS GERAIS</h1>

        <PerguntaAberta pergunta="1. Qual o seu nome?" />
        <PerguntaAberta pergunta="2. Qual sua idade?" />
        <PerguntaAberta pergunta="3. Qual seu email?" />
        <PerguntaFechada
          pergunta="4. Qual a sua escolaridade?"
          opcoes="Ensino médio incompleto"
          opcoes2="Ensino médio completo"
          opcoes3="Ensino superior incompleto"
          opcoes4="Ensino superior completo"
        />
      </ContainerEtapa1>
    );
  }
}
