import React, { useState, useEffect } from "react";
import useAuthorization from "../hooks/useAuthorization";
import Helmet from "react-helmet";
import axios from "axios";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Button } from "@material-ui/core";
import { Body, Body2 } from "./styles";

const StyleTable = styled.table`
  border: 1px solid white;
  border-collapse: collapse;
`;

const StyleTr = styled.tr`
  border: 1px solid white;
  border-collapse: collapse;
`;

const StyleTh = styled.th`
  border: 1px solid white;
  border-collapse: collapse;
`;

function ListTripsPage() {
  useAuthorization();
  const [trips, setTrips] = useState([]);
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    axios(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-messias-mello/trips"
    )
      .then((response) => {
        setTrips(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const listTrips = (
    <StyleTable>
      <StyleTr>
        <th>NOME</th>
        <th>DESCRIÇÃO</th>
        <th>PLANETA</th>
        <th>DURAÇÃO</th>
        <th>DATA</th>
      </StyleTr>
      {trips.map((infoTrip) => {
        return (
          <StyleTr>
            <StyleTh>{infoTrip.name}</StyleTh>
            <StyleTh>{infoTrip.description}</StyleTh>
            <StyleTh>{infoTrip.planet}</StyleTh>
            <StyleTh>{infoTrip.durationInDays}</StyleTh>
            <StyleTh>{infoTrip.date}</StyleTh>
          </StyleTr>
        );
      })}
    </StyleTable>
  );

  return (
    <Body>
      <Helmet title="Lista de Viagens - ADM" />

      <h1>Lista de Viagens</h1>
      {listTrips}

      <Body2>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={goBack}
        >
          Voltar
        </Button>
      </Body2>
    </Body>
  );
}

export default ListTripsPage;
