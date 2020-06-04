import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filter: "",
  };

  componentDidMount = () => {
    if (localStorage.getItem("tarefasSalvas")) {
      const tarefasArray = JSON.parse(localStorage.getItem("tarefasSalvas"));

      console.log(tarefasArray);
      this.setState({ tarefas: tarefasArray });
    }
  };

  /* Como estava
  componentDidMount = () => {
    const tarefasNoLocalStorage = localStorage.getItem("tarefasSalvas");
    const tarefasArray = JSON.parse(tarefasNoLocalStorage);
    console.log(tarefasNoLocalStorage);
    console.log(tarefasArray);
    this.setState({ tarefas: tarefasArray });
  };
  
  */

  componentDidUpdate = () => {
    const listaDeTarefas = this.state.tarefas;
    localStorage.setItem("tarefasSalvas", JSON.stringify(listaDeTarefas));
  };

  onChangeInput = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false,
    };
    const novasTarefas = [...this.state.tarefas, novaTarefa];

    this.setState({ tarefas: novasTarefas, inputValue: "" });
  };

  selectTarefa = (id) => {
    const idTarefas = this.state.tarefas.map((tarefaCompleta) => {
      const idAtual = id;
      if (tarefaCompleta.id === id) {
        return {
          id: idAtual,
          texto: tarefaCompleta.texto,
          completa: !false,
        };
      } else {
        return tarefaCompleta;
      }
    });
    this.setState({ tarefas: idTarefas });
    console.log(idTarefas);
  };

  onChangeFilter = (event) => {
    this.setState({ filter: event.target.value });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((arrayFiltrado) => {
      switch (this.state.filter) {
        case "pendentes":
          return !arrayFiltrado.completa;
        case "completas":
          return arrayFiltrado.completa;

        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((arrayMapDoFiltrado) => {
            return (
              <Tarefa
                key={arrayMapDoFiltrado.id}
                completa={arrayMapDoFiltrado.completa}
                onClick={() => this.selectTarefa(arrayMapDoFiltrado.id)}
              >
                {arrayMapDoFiltrado.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
