import React, { useState, useEffect } from "react";
import useAuthorization from "../hooks/useAuthorization";
import Helmet from "react-helmet";
import axios from "axios";
import useForm from "../hooks/useForm";
import styled from "styled-components";
import Planets from "./Planets";
import { useHistory } from "react-router-dom";
import { Body, Body2 } from "./styles";
import { Button } from "@material-ui/core";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
`;

function CreateTripPage() {
  useAuthorization();
  const token = window.localStorage.getItem("token");
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const { form, onChange, resetForm } = useForm({
    nome: "",
    planeta: "",
    data: "",
    descricao: "",
    duracao: "",
  });

  const createTrip = () => {
    const headers = {
      headers: {
        auth: token,
      },
    };

    const body = {
      name: form.nome,
      planet: form.planeta,
      date: form.data,
      description: form.descricao,
      durationInDays: Number(form.duracao),
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-messias-mello/trips",
        body,
        headers
      )
      .then((response) => {
        console.log(token);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        console.log(token);
      });
  };

  const handleInputChange = (event) => {
    //capturando apenas o name e value do event.target completo ( console.log (event.target) verá todo o conteúdo do event.target) , com a  destruturação
    const { name, value } = event.target;

    //chama a função onChange com name e value do event.target, como atributo
    onChange(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createTrip();
    resetForm();
  };

  return (
    <Body>
      <Helmet title="Criar Página - ADM" />
      <h1>Criar Viagem</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          required
          name="nome"
          value={form.nome}
          placeholder="Nome"
          onChange={handleInputChange}
          pattern="[A-Za-z]{5,}"
          title="Nome com no mínimo 5 letras"
        ></input>
        <Planets onChange={handleInputChange} value={form.planeta} />
        <input
          type="date"
          min={new Date().toJSON().split("T")[0]}
          required
          name="data"
          value={form.data}
          placeholder="Data"
          onChange={handleInputChange}
        ></input>
        <input
          type="text"
          required
          name="descricao"
          value={form.descricao}
          placeholder="Descrição"
          onChange={handleInputChange}
          pattern="[A-Za-z ]{30,}"
          title="Nome com no mínimo 30 letras"
        ></input>
        <input
          type="number"
          required
          name="duracao"
          value={form.duracao}
          placeholder="Duração"
          onChange={handleInputChange}
          min="50"
          title="No mínimo 50 dias"
        ></input>
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

export default CreateTripPage;
