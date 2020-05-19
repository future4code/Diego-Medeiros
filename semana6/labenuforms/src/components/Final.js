import React from 'react';
import styled from 'styled-components'

const ContainerFinal = styled.div `
  border: 1px solid black;
  display: flex;
  flex-direction:column;
  align-items:center;
  font-weight:bold;
`

export class Final extends React.Component {

  render() {
    return(
      <ContainerFinal>
        <h1>O FORMULÁRIO ACABOU</h1>
        <p>Muito obrigado por participar! entraremos em contato!</p>
        
      </ContainerFinal>

    )
  }
}