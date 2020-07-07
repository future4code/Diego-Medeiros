import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Countrys from "./Countrys";
import Helmet from "react-helmet";
import useForm from "../hooks/useForm";
import { useHistory } from "react-router-dom";
import { Body, Body2 } from "./styles";
import { Button } from "@material-ui/core";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
`;

function ApplicationFormPage() {
  //função e estado vindo do retorno do useForm, (o retorno dele é um objeto)
  const { form, onChange, resetForm } = useForm({
    nome: "",
    idade: "",
    nacao: "",
    profissao: "",
    pergunta: "",
    tripId: "",
  });
  const [tripsId, setTripsId] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getTrips();
  }, []);

  const handleInputChange = (event) => {
    //capturando apenas o name e value do event.target completo ( console.log (event.target) verá todo o conteúdo do event.target) , com a  destruturação
    const { name, value } = event.target;

    //chama a função onChange com name e value do event.target, como atributo
    onChange(name, value);
  };

  const ApplyToTrip = () => {
    const body = {
      name: form.nome,
      age: form.idade,
      applicationText: form.pergunta,
      profession: form.profissao,
      country: form.nacao,
    };

    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-messias-mello/trips/${form.tripId}/apply`,
        body
      )
      .then(() => {
        alert("Cadastrado com sucesso!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTrips = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-messias-mello/trips"
      )
      .then((response) => {
        setTripsId(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    ApplyToTrip();
    resetForm();
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <Body>
      <Helmet title="Formulário de Inscrição" />
      <h1>Formulário de Inscrição</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          name="nome"
          value={form.nome}
          placeholder="Nome"
          onChange={handleInputChange}
          pattern="[A-Za-z]{3,}"
          title="Nome com no mínimo 3 letras"
        ></input>
        <input
          type="number"
          min="18"
          required
          name="idade"
          value={form.idade}
          placeholder="Idade"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          minlength="30"
          required
          name="pergunta"
          value={form.pergunta}
          placeholder="Porque sou um bom candidato(a)?"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          minlength="10"
          required
          name="profissao"
          value={form.profissao}
          placeholder="Profissão"
          onChange={handleInputChange}
        ></input>
        <Countrys onChange={handleInputChange} value={form.nacao} />
        <select
          required
          name="tripId"
          value={form.tripId}
          placeholder="TripId"
          onChange={handleInputChange}
        >
          <option value="">Escolha a viagem</option>
          {tripsId.map((id) => {
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
            size="large"
            type="submit"
          >
            Enviar
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={goBack}
          >
            Voltar
          </Button>
        </Body2>
      </Form>
    </Body>
  );
}

export default ApplicationFormPage;
