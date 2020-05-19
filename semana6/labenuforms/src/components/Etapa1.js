import React from 'react';
import styled from 'styled-components'

const ContainerEtapa1 = styled.div `
  border: 1px solid black;
  display: flex;
  flex-direction:column;
  align-items:center;
`

export class Etapa1 extends React.Component {

  render() {
    return(
      <ContainerEtapa1>
        <h1>ETAPA1 - DADOS GERAIS</h1>
        <ol>
          <li>Qual o seu nome?</li>
          <input type="text"></input>
          <li>Qual sua idade?</li>
          <input type="text"></input>
          <li>Qual seu email?</li>
          <input type="text"></input>
          <li>Qual a sua escolaridade?</li>
          <select>
            <option value="Ensino médio incompleto">Ensino médio incompleto</option>
            <option value="Ensino médio completo">Ensino médio completo</option>
            <option value="Ensino superior incompleto">Ensino superior incompleto</option>
            <option value="Ensino médio completo">Ensino superior completo</option>
          </select>
        </ol>
        
      </ContainerEtapa1>

    )
  }
}