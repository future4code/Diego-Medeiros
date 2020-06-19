import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Matchs from "./components/Matchs";
import Clear from "./components/Clear";
import Paper from "@material-ui/core/Paper";
import heart from "./components/imagens/heart.png";
import heartBroken from "./components/imagens/heart-broken.png";

const Imagem = styled.img`
  width: 300px;
  height: 400px;
`;

const Estilo = styled(Paper)`
  display: flex;
  position: fixed;
  flex-direction: column;
  margin: auto;
  align-content: center;
  align-items: center;
  width: 30%;

  margin-top: 10%;
  margin-left: 35vw;
`;

const Estilo2 = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
`;

const Estilo3 = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
`;

const Estilo4 = styled.svg`
  display: flex;
`;

function App() {
  const [profile, setProfile] = useState({});
  const [screen, setScreen] = useState(true);
  const [match, setMatch] = useState();

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-messias/person"
      )
      .then((response) => {
        setProfile(response.data.profile);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const choosePerson = (valor) => {
    const body = {
      id: profile.id,
      choice: valor,
    };
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-messias/choose-person",
        body
      )
      .then((response) => {
        getProfile();
        //setMatch(response.data.isMatch);
        if (response.data.isMatch === true) {
          alert("Parabéns deu match");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const changeScreen = () => {
    setScreen(!screen);
  };

  if (profile && screen) {
    return (
      <Estilo elevation={3} variant="outlined">
        <Estilo2>
          <h3>ASTROMATCH</h3>
          <button onClick={changeScreen}>Matches</button>
        </Estilo2>

        <Imagem src={profile.photo}></Imagem>
        <h4>{profile.name},</h4>
        <span>{profile.age} anos</span>
        <p>{profile.bio}</p>
        <Estilo3>
          <img
            src={heartBroken}
            onClick={() => {
              choosePerson(false);
            }}
          />
          <img
            src={heart}
            onClick={() => {
              choosePerson(true);
            }}
          />
        </Estilo3>

        <hr></hr>
        <Clear getProfile={getProfile} />
      </Estilo>
    );
  }

  if (screen === false) {
    return (
      <div>
        <Matchs profileId={profile.id} changeScreen={changeScreen} />
      </div>
    );
  } else {
    return (
      <div>
        <hq>Cabou os match</hq>
        <Clear getProfile={getProfile} />
      </div>
    );
  }
}

export default App;
