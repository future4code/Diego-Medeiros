import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";
import Button from "@material-ui/core/Button";

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
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletarTarefa(lista.id)}
          >
            Delete
          </Button>
        </div>
      );
    }
  });

  const tercaFeira = tarefas.map((lista) => {
    if (lista.day === "terça") {
      return (
        <div>
          <p>{lista.text}</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletarTarefa(lista.id)}
          >
            Delete
          </Button>
        </div>
      );
    }
  });

  const quartaFeira = tarefas.map((lista) => {
    if (lista.day === "quarta") {
      return (
        <div>
          <p>{lista.text}</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletarTarefa(lista.id)}
          >
            Delete
          </Button>
        </div>
      );
    }
  });

  const quintaFeira = tarefas.map((lista) => {
    if (lista.day === "quinta") {
      return (
        <div>
          <p>{lista.text}</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletarTarefa(lista.id)}
          >
            Delete
          </Button>
        </div>
      );
    }
  });

  const sextaFeira = tarefas.map((lista) => {
    if (lista.day === "sexta") {
      return (
        <div>
          <p>{lista.text}</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletarTarefa(lista.id)}
          >
            Delete
          </Button>
        </div>
      );
    }
  });

  const sabadoDia = tarefas.map((lista) => {
    if (lista.day === "sabado") {
      return (
        <div>
          <p>{lista.text}</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletarTarefa(lista.id)}
          >
            Delete
          </Button>
        </div>
      );
    }
  });

  const domingoDia = tarefas.map((lista) => {
    if (lista.day === "domingo") {
      return (
        <div>
          <p>{lista.text}</p>
          <Button
            variant="contained"
            color="secondary"
            onClick={() => deletarTarefa(lista.id)}
          >
            Delete
          </Button>
        </div>
      );
    }
  });

  return (
    <div className="App">
      <h1>PLANNER</h1>

      <label>
        Nova Tarefa:
        <input
          value={tarefa}
          type="text"
          name="tarefa"
          onChange={tarefaDigitada}
          placeholder="Nova tarefa"
        ></input>
      </label>
      <div>
        <label htmlFor={"testeSelecionaDia"}>Selecione o dia:</label>
        <select id={"testeSelecionaDia"} value={dia} onChange={selecionaDia}>
          <option data-testid="selectDia">Escolha o Dia</option>
          <option value="segunda">Segunda</option>
          <option value="terça">Terça</option>
          <option value="quarta">Quarta</option>
          <option value="quinta">Quinta</option>
          <option value="sexta">Sexta</option>
          <option value="sabado">Sábado</option>
          <option value="domingo">Domingo</option>
        </select>
      </div>
      <Button variant="contained" color="primary" onClick={criarTarefa}>
        Criar Tarefa
      </Button>

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
