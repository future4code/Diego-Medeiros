import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

const Estilo1 = styled.div`
  display: flex;
  justify-content: space-around;
`;

function App() {
  const [tarefa, setTarefa] = useState("");
  const [dia, setDia] = useState("");
  const [tarefas, setTarefas] = useState([]);

  useEffect(() => {
    pegarTarefa();
  }, []);

  const tarefaDigitada = (event) => {
    setTarefa(event.target.value);
  };

  const selecionaDia = (event) => {
    setDia(event.target.value);
  };
  console.log(tarefa);
  console.log(dia);

  const criarTarefa = () => {
    const body = {
      text: tarefa,
      day: dia,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-diego-messias",
        body
      )
      .then((response) => {
        setTarefa("");
        pegarTarefa();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const pegarTarefa = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-diego-messias"
      )
      .then((response) => {
        setTarefas(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deletarTarefa = (id) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-diego-messias/${id}`
      )
      .then((response) => {
        pegarTarefa();
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const segundaFeira = tarefas.map((lista) => {
    if (lista.day === "segunda") {
      return (
        <div>
          <p>{lista.text}</p>
          <button onClick={() => deletarTarefa(lista.id)}>Delete</button>
        </div>
      );
    }
  });

  const tercaFeira = tarefas.map((lista) => {
    if (lista.day === "terça") {
      return (
        <div>
          <p>{lista.text}</p>
          <button onClick={() => deletarTarefa(lista.id)}>Delete</button>
        </div>
      );
    }
  });

  const quartaFeira = tarefas.map((lista) => {
    if (lista.day === "quarta") {
      return (
        <div>
          <p>{lista.text}</p>
          <button onClick={() => deletarTarefa(lista.id)}>Delete</button>
        </div>
      );
    }
  });

  const quintaFeira = tarefas.map((lista) => {
    if (lista.day === "quinta") {
      return (
        <div>
          <p>{lista.text}</p>
          <button onClick={() => deletarTarefa(lista.id)}>Delete</button>
        </div>
      );
    }
  });

  const sextaFeira = tarefas.map((lista) => {
    if (lista.day === "sexta") {
      return (
        <div>
          <p>{lista.text}</p>
          <button onClick={() => deletarTarefa(lista.id)}>Delete</button>
        </div>
      );
    }
  });

  const sabadoDia = tarefas.map((lista) => {
    if (lista.day === "sabado") {
      return (
        <div>
          <p>{lista.text}</p>
          <button onClick={() => deletarTarefa(lista.id)}>Delete</button>
        </div>
      );
    }
  });

  const domingoDia = tarefas.map((lista) => {
    if (lista.day === "domingo") {
      return (
        <div>
          <p>{lista.text}</p>
          <button onClick={() => deletarTarefa(lista.id)}>Delete</button>
        </div>
      );
    }
  });

  return (
    <div className="App">
      <div>PLANNER</div>

      <label>Nova Tarefa:</label>
      <input
        value={tarefa}
        type="text"
        name="tarefa"
        onChange={tarefaDigitada}
        placeholder="Nova tarefa"
      ></input>
      <select value={dia} name="diaDaSemana" onChange={selecionaDia}>
        <option>Escolha o Dia</option>
        <option value="segunda">Segunda-Feira</option>
        <option value="terça">Terça-Feira</option>
        <option value="quarta">Quarta-Feira</option>
        <option value="quinta">Quinta-Feira</option>
        <option value="sexta">Sexta-Feira</option>
        <option value="sabado">Sábado</option>
        <option value="domingo">Domingo</option>
      </select>

      <button onClick={criarTarefa}>Criar Tarefa</button>

      <Estilo1>
        <div>
          <h1>Segunda-Feira</h1>
          <ul id="dia1">{segundaFeira}</ul>
        </div>
        <div>
          <h1>Terça-Feira</h1>
          <ul id="dia2">{tercaFeira}</ul>
        </div>
        <div>
          <h1>Quarta-Feira</h1>
          <ul id="dia3">{quartaFeira}</ul>
        </div>
        <div>
          <h1>Quinta-Feira</h1>
          <ul id="dia4">{quintaFeira}</ul>
        </div>
        <div>
          <h1>Sexta-Feira</h1>
          <ul id="dia5">{sextaFeira}</ul>
        </div>
        <div>
          <h1>Sábado</h1>
          <ul id="dia6">{sabadoDia}</ul>
        </div>
        <div>
          <h1>Domingo</h1>
          <ul id="dia7">{domingoDia}</ul>
        </div>
      </Estilo1>
    </div>
  );
}

export default App;
