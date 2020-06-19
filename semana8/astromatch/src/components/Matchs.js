import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";

const Imagem = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50px;
`;

const Estilo = styled(Paper)`
  display: flex;
  position: fixed;
  flex-direction: column;
  margin: auto;
  align-content: center;
  align-items: center;
  width: 30%;
  height: 65vh;
  margin-top: 10%;
  margin-left: 35vw;
`;

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
        <Imagem src={match.photo}></Imagem>
        <span>{match.name}</span>
      </div>
    );
  });

  return (
    <Estilo>
      <h2>Matches</h2>
      <div>{listMatches}</div>
      <button onClick={props.changeScreen}>Voltar</button>
    </Estilo>
  );
}

export default Matchs;
