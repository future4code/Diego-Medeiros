import React from "react";
import styled from "styled-components";

export class PerguntaFechada extends React.Component {
  render() {
    return (
      <div>
        <label>{this.props.pergunta}</label>
        <br />
        <select>
          <option value={this.props.opcoes}>{this.props.opcoes}</option>
          <option value={this.props.opcoes2}>{this.props.opcoes2}</option>
          <option value={this.props.opcoes3}>{this.props.opcoes3}</option>
          <option value={this.props.opcoes4}>{this.props.opcoes4}</option>
        </select>
      </div>
    );
  }
}
