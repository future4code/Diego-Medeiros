import React, { useState, useEffect } from "react";
import axios from "axios";
import Matchs from "./components/Matchs";
import Heart from "./components/imagens/heart.png";
import HeartBroken from "./components/imagens/heart-broken.png";
import UserMatchs from "./components/imagens/account-heart.png";
import CircularProgress from "@material-ui/core/CircularProgress";
import {
  MainStyle,
  Imagem,
  StyleHeader,
  HeartsContainer,
  StyleCursor,
  StyledLoading,
  StyledButton,
} from "./components/styles";

function App() {
  const [profile, setProfile] = useState({});
  const [screen, setScreen] = useState(true);

  useEffect(() => {
    getProfile();
  }, []);

  const getProfile = () => {
    setProfile(undefined);
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
    setProfile(undefined);
    axios
      .post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-messias/choose-person",
        body
      )
      .then((response) => {
        getProfile();
        if (response.data.isMatch === true) {
          alert("Parabéns deu match");
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const clearAll = () => {
    const body = {
      id: "PatusZf4mHH6UoZfYC8I",
    };
    setProfile(undefined);
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-messias/clear",
        body
      )
      .then(() => {
        getProfile();
        alert("Matches Resetados");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeScreen = () => {
    setScreen(!screen);
  };

  if (profile === undefined) {
    return (
      <MainStyle>
        <StyledLoading>
          <CircularProgress />
        </StyledLoading>
      </MainStyle>
    );
  }

  if (profile && screen) {
    return (
      <MainStyle elevation={3} variant="outlined">
        <StyleHeader>
          <h3>ASTROMATCH</h3>
          <StyleCursor src={UserMatchs} onClick={changeScreen} />
        </StyleHeader>

        <Imagem src={profile.photo}></Imagem>
        <h4>{profile.name},</h4>
        <span>{profile.age} anos</span>
        <p>{profile.bio}</p>
        <HeartsContainer>
          <StyleCursor
            src={HeartBroken}
            onClick={() => {
              choosePerson(false);
            }}
          />
          <StyleCursor
            src={Heart}
            onClick={() => {
              choosePerson(true);
            }}
          />
        </HeartsContainer>

        <hr></hr>
        <div>
          <StyledButton onClick={clearAll}>Reset</StyledButton>
        </div>
      </MainStyle>
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
      <MainStyle>
        <h1>Cabou os Match</h1>
        <div>
          <StyledButton onClick={clearAll}>Reset</StyledButton>
        </div>
      </MainStyle>
    );
  }
}

export default App;
