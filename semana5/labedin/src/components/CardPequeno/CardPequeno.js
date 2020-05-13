import React from 'react';
import './CardPequeno.css'


function CardPequeno(props) {
    return (
        <div className="info-contato">
            <img src={ props.imagem } />
             <p>{ props.descricao }</p>
        </div>
    )
}

export default CardPequeno;