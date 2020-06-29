import React, { useState, useEffect } from "react";
import useAuthorization from "../hooks/useAuthorization";
import Helmet from "react-helmet";
import axios from "axios";
import useForm from "../hooks/useForm";
import { useHistory } from "react-router-dom";
import { Body, Body2 } from "./styles";
import { Button } from "@material-ui/core";

function TripDetailsPage() {
  useAuthorization();
  const token = window.localStorage.getItem("token");
  const { form, onChange } = useForm({
    tripId: "",
  });
  const [trips, setTrips] = useState([]);
  const [tripDetail, setTripDetail] = useState([]);
  const [candidatos, setCandidatos] = useState([]);
  const [candidatosAprovados, setCandidatosAprovados] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTrips();
  }, []);

  const getTrips = () => {
    setTripDetail([]);
    setCandidatos([]);
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-messias-mello/trips"
      )
      .then((response) => {
        setTrips(response.data.trips);
        setTripDetail([]);
        setCandidatos([]);

        //setCandidatos(candidatosTeste);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTripDetail = () => {
    const headers = {
      headers: {
        auth: token,
      },
    };
    axios
      .get(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-messias-mello/trip/${form.tripId}`,
        headers
      )
      .then((response) => {
        setTripDetail(response.data.trip);
        setCandidatos(response.data.trip.candidates);
        setCandidatosAprovados(response.data.trip.approved);
      })

      .catch((error) => {
        console.log(error);
      });
  };

  const decideCandidate = (aprovacao, id) => {
    const body = {
      approve: aprovacao,
    };

    const headers = {
      headers: {
        auth: token,
      },
    };

    axios
      .put(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-messias-mello/trips/${form.tripId}/candidates/${id}/decide`,
        body,
        headers
      )
      .then((response) => {
        alert("Aprovação enviada");
        console.log(response);
        //setCandidatosAprovados(tripDetail.approved);
        getTripDetail();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleInputChange = (event) => {
    //capturando apenas o name e value do event.target completo ( console.log (event.target) verá todo o conteúdo do event.target) , com a  destruturação
    const { name, value } = event.target;
    //chama a função onChange com name e value do event.target, como atributo
    onChange(name, value);
    getTrips();
  };

  const listTripDetail = candidatos.map((lista) => {
    return (
      <div>
        <div>Nome : {lista.name}</div>
        <div>Idade: {lista.age}</div>
        <div>Porque: {lista.applicationText}</div>
        <div>País: {lista.country}</div>
        <div>Profissão: {lista.profession}</div>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => decideCandidate(true, lista.id)}
        >
          Aprovar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          onClick={() => decideCandidate(false, lista.id)}
        >
          Reprovar
        </Button>
        <hr></hr>
      </div>
    );
  });

  const candidatesApproveds = candidatosAprovados.map((lista) => {
    return <div>{lista.name}</div>;
  });

  const goBack = () => {
    history.goBack();
  };

  return (
    <Body>
      <Helmet title="Detalhes da Viagem" />
      <h1>Detalhes da Viagem</h1>
      <select
        required
        name="tripId"
        value={form.tripId}
        placeholder="TripId"
        onChange={handleInputChange}
      >
        <option value="">Escolha a viajem</option>
        {trips.map((id) => {
          return (
            <option value={id.id}>
              {id.name}-{id.planet}
            </option>
          );
        })}
      </select>
      <Body2>
        <Button
          variant="contained"
          color="primary"
          size="small"
          onClick={getTripDetail}
        >
          Detalhe da Viagem
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={goBack}
        >
          Voltar
        </Button>
      </Body2>

      <h2>Viagem: {tripDetail.name}</h2>
      <hr></hr>
      <div>
        <div>Candidatos Pendentes</div>
        <div>{listTripDetail}</div>
      </div>
      <hr></hr>
      <div>
        <div>Candidatos Aprovados</div>
        <div>{candidatesApproveds}</div>
      </div>
    </Body>
  );
}

export default TripDetailsPage;
