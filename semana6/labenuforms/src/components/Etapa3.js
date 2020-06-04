import React from 'react';
import styled from 'styled-components'


const ContainerEtapa3 = styled.div `
  border: 1px solid black;
  display: flex;
  flex-direction:column;
  align-items:center;
`

export class Etapa3 extends React.Component {

  render() {
    return(
      <ContainerEtapa3>
        <h1>ETAPA3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <ol start="5">
          <li>Por que você não terminou um curso de graduação?</li>
          <input type="text"></input>
          <li>Você fez algum curso complementar?</li>
          <input type="text"></input>          
        </ol>
        
        
      </ContainerEtapa3>

    )
  }
}