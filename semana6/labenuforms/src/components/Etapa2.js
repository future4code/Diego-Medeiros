import React from 'react';
import styled from 'styled-components'



  const ContainerEtapa2 = styled.div `
  border: 1px solid black;
  display: flex;
  flex-direction:column;
  align-items:center;
`

export class Etapa2 extends React.Component {

  render() {
    return(
      <ContainerEtapa2>
        <h1>ETAPA2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <ol start="5">
          <li>Qual curso?</li>
          <input type="text"></input>
          <li>Qual a unidade de ensino?</li>  
          <input type="text"></input>        
        </ol>
        
        
      </ContainerEtapa2>

    )
  }
}