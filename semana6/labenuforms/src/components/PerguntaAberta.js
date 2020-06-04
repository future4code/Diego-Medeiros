import React from "react";
import styled from "styled-components";

export class PerguntaAberta extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.pergunta}</label>
        <br />
        <input type="text"></input>
      </div>
    );
  }
}

/*
Componente funcional com props
export function PerguntaAberta(props) {
  return (
    <div>
      <label>{props.pergunta}</label>
      <br />
      <input type="text"></input>
    </div>
  );
}

Componente funcional com desustruturação de props
export function PerguntaAberta({pergunta}) {
  return (
    <div>
      <label>{pergunta}</label>
      <br />
      <input type="text"></input>
    </div>
  );
}
*/
