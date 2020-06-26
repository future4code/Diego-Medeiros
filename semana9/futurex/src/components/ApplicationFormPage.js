import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 30vw;
`;

function ApplicationFormPage() {
  const [form, setForm] = useState({});
  const [tripsId, setTripsId] = useState([]);
  //função onChange recebendo name e value como atributo do event.target, sendo chamada na linha *
  const onChange = (name, value) => {
    const newForm = { ...form, [name]: value };
    setForm(newForm);
  };

  const handleInputChange = (event) => {
    //capturando apenas o name e value do event.target completo ( console.log (event.target) verá todo o conteúdo do event.target) , com a  destruturação
    const { name, value } = event.target;
    console.log(event.target.name);
    console.log(event.target.value);
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
    console.log(body);
    axios
      .post(
        `https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-messias-mello/trips/6r2Tzuc9JNbRy4NNa1iu/apply`,
        body
      )
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getTrips = () => {
    axios(
      "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-messias/trips"
    )
      .then((response) => {
        setTripsId(response.data.trips);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  console.log(tripsId);

  const handleSubmit = (event) => {
    event.preventDefault();
    ApplyToTrip();
  };

  console.log(form);

  return (
    <div>
      <div>Formulário de Inscrição</div>
      <Form onSubmit={handleSubmit}>
        <input
          required
          name="nome"
          value={form.nome}
          placeholder="Nome"
          onChange={handleInputChange}
        ></input>
        <input
          required
          name="idade"
          value={form.idade}
          placeholder="Idade"
          onChange={handleInputChange}
        ></input>
        <input
          required
          name="pergunta"
          value={form.pergunta}
          placeholder="Porque sou um bom candidato(a)?"
          onChange={handleInputChange}
        ></input>
        <input
          required
          name="profissao"
          value={form.profissao}
          placeholder="Profissão"
          onChange={handleInputChange}
        ></input>
        <select required name="nacao" onChange={handleInputChange}>
          <option></option>
          <option value="Brasil">Brasil</option>
          <option value="Afeganistão">Afeganistão</option>
          <option value="África do Sul">África do Sul</option>
          <option value="Albânia">Albânia</option>
          <option value="Alemanha">Alemanha</option>
        </select>

        <div>
          <button type="submit">Enviar</button>
        </div>
      </Form>
      <button onClick={getTrips}>testeGet</button>
    </div>
  );
}

export default ApplicationFormPage;
