import React, { useState, useEffect } from "react";
import axios from "axios";
import BackButton from "./imagens/step-backward.png";
import { MainStyle, ImagemMatch, MatchesHeader, StyleButton } from "./styles";

function Matchs(props) {
  const [matches, setMatches] = useState([]);
  useEffect(() => {
    getMatchs();
  }, [props.profileId]);

  const getMatchs = () => {
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-messias/matches"
      )
      .then((response) => {
        setMatches(response.data.matches);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listMatches = matches.map((match) => {
    return (
      <div>
        <ImagemMatch src={match.photo}></ImagemMatch>
        <span>{match.name}</span>
      </div>
    );
  });

  return (
    <MainStyle>
      <MatchesHeader>
        <StyleButton src={BackButton} onClick={props.changeScreen} />
        <h2>Matches</h2>
      </MatchesHeader>

      <div>{listMatches}</div>
    </MainStyle>
  );
}

export default Matchs;
