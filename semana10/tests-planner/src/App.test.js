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
