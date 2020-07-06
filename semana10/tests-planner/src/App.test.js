import React from "react";
import { render, wait, fireEvent, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import axios from "axios";
afterEach(cleanup);

test("A tarefa que foi digitada deve aparecer na tela", async () => {
  //Preparação
  axios.post = jest.fn().mockResolvedValue();

  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        day: "segunda",
        text: "plantar batata",
        id: "0Nw80BqpXddZHArFqnBs",
      },
    ],
  });

  const {
    getByPlaceholderText,
    getByText,
    getByLabelText,
    queryByText,
  } = render(<App />);
  //Verificação/Execução

  const input = getByPlaceholderText(/Nova tarefa/i);

  fireEvent.change(input, {
    target: {
      value: "plantar batata",
    },
  });

  expect(input).toHaveValue("plantar batata");

  const select = getByLabelText(/Selecione o dia:/i);
  userEvent.selectOptions(select, queryByText("Segunda").value);
  const button = getByText(/Criar Tarefa/i);
  fireEvent.click(button);

  expect(axios.post).toHaveBeenCalledWith(
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-diego-messias",
    {
      text: "plantar batata",
      day: "segunda",
    }
  );

  await wait(() => expect(axios.get).toHaveBeenCalled());
  await wait(() => expect(getByText(/plantar batata/i)).toBeInTheDocument());
});

test("A tarefa criada deve sumir da tela ao apertar no botão deletar", async () => {
  //Preparação
  axios.post = jest.fn().mockResolvedValue();

  axios.delete = jest.fn().mockResolvedValue();

  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        day: "segunda",
        text: "plantar batata",
        id: "0Nw80BqpXddZHArFqnBs",
      },
    ],
  });

  const {
    getByPlaceholderText,
    getByText,
    getByLabelText,
    queryByText,
  } = render(<App />);

  //Verificação/Execução

  const input = getByPlaceholderText(/Nova tarefa/i);

  fireEvent.change(input, {
    target: {
      value: "plantar batata",
    },
  });

  expect(input).toHaveValue("plantar batata");

  const select = getByLabelText(/Selecione o dia:/i);
  userEvent.selectOptions(select, queryByText("Segunda").value);
  const button = getByText(/Criar Tarefa/i);
  fireEvent.click(button);

  expect(axios.post).toHaveBeenCalledWith(
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-diego-messias",
    {
      text: "plantar batata",
      day: "segunda",
    }
  );
  await wait(() => expect(axios.get).toHaveBeenCalled());
  await wait(() => expect(getByText(/plantar batata/i)).toBeInTheDocument());

  const buttonDeletar = getByText(/Delete/i);
  await wait(() => expect(buttonDeletar).toHaveTextContent(/Delete/i)); //verifica se o botão deletar tá na tela
  fireEvent.click(buttonDeletar);

  expect(axios.delete).toHaveBeenCalledWith(
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-diego-messias/0Nw80BqpXddZHArFqnBs"
  );

  await wait(() => expect(axios.get).toHaveBeenCalled());
  await wait(() =>
    expect(getByText(/plantar batata/i)).toBeInTheDocument(null)
  );
});

/*test("A tarefa que foi digitada deve aparecer na tela", async () => {
  //preparação

  axios.get = jest.fn().mockResolvedValue({
    data: [
      {
        day: "segunda",
        text: "plantar batata",
        id: "0Nw80BqpXddZHArFqnBs",
      },
    ],
  });

  axios.post = jest.fn().mockResolvedValue();

  const {
    getByPlaceholderText,
    getByText,
    getByLabelText,
    queryByText,
    getByDisplayValue,
    getAllByText,
    findByText,
  } = render(<App />);
  const inputTarefa = getByPlaceholderText(/Nova tarefa/i);
  const addTarefa = getByText(/Criar Tarefa/i);
  const select = getByLabelText(/Selecione o dia:/);
  //execução
  await userEvent.type(inputTarefa, "plantar batata");
  expect(inputTarefa).toHaveValue("plantar batata");
  await userEvent.selectOptions(select, queryByText("Segunda").value);

  userEvent.click(addTarefa);
  expect(axios.post).toHaveBeenCalledWith(
    "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-mello-diego-messias",
    {
      day: "segunda",
      text: "plantar batata",
    }
  );

  //verificação
  await wait(() => expect(axios.get).toHaveBeenCalled());
  const novaTarefa = findByText("plantar batata");
  await wait(() => expect(novaTarefa).toBeInTheDocument());
});*/

/*test("Input existe na tela", () => {
  //Preparação
  const { getByPlaceholderText } = render(<App />);
  const input = getByPlaceholderText("Nova tarefa");

  //Verificação
  expect(input).toBeInTheDocument();
});*/

/*test("Botao existe na tela", () => {
  // Preparação
  const { getByText } = render(<App />);

  // Verificação
  expect(getByText(/Criar Tarefa/)).toBeInTheDocument();
});*/

/*test("Select existe na tela", () => {
  //Preparação
  const { getByTestId } = render(<App />);

  //Verificação
  expect(getByTestId("selectDia")).toHaveTextContent(/Escolha o Dia/);
});*/

/*test("Delete existe na tela", async () => {
  //Preparação
  const { findAllByText } = render(<App />);
  const buttonDeletar = await findAllByText("Deletar");

  //Verificação
  expect(buttonDeletar[0]).toHaveTextContent(/Deletar/);
});*/
