import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import fotoPerfil from './eu.png';
import fotoAti from './ati.png';
import fotoGrande from './grande.png';
import fotoMsb from './msb.jpg';
import iconeEmail from './email.png';
import iconeTelefone from './telefone.png';
import iconeEndereco from './endereco.png';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoPerfil} 
          nome="Diego Messias" 
          descricao="Graduado em redes de computadores pela Unibratec e estudante de desenvolvimento web full stack. Me interessei por tecnologia por causa da minha paixão por games, comecei em um curso de hardware, avançando até a formação de redes de computadores dentre outros cursos dentro da área. Agora exploro a área de desenvolvimento."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={fotoMsb} 
          nome="MSB INFORMÁTICA" 
          descricao="Suporte técnico e venda de produtos de Informática" 
        />
        
        <CardGrande 
          imagem={fotoAti}
          nome="ATI - AGÊNCIA DE TECNOLOGIA DA INFORMAÇÃO DE PERNAMBUCO" 
          descricao="Suporte técnico e administração de redes" 
        />

        <CardGrande 
          imagem={fotoGrande} 
          nome="COLÉGIO GRANDE PASSO" 
          descricao="Suporte técnico, manutenção e administração de redes e dos sistemas internos da empresa" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>

      <div className="infocontato">
        <h2>Informações para contato</h2>
        <CardPequeno
          imagem={iconeEmail}
          descricao="di__e__go@hotmail.com"
        />
        <CardPequeno
          imagem={iconeTelefone}
          descricao="99999-9999"
        />
        <CardPequeno
          imagem={iconeEndereco}
          descricao="Orgrimmar, Azeroth"
        />          
      </div>

    </div>
  );
}

export default App;
