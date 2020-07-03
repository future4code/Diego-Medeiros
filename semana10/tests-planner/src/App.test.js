import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("A tarefa que foi digitada deve aparecer na tela", async () => {
  //preparação
  const { getByPlaceholderText, getByText } = render(<App />);
  const inputTarefa = getByPlaceholderText(/Nova tarefa/i);
  const addTarefa = getByText(/Criar Tarefa/i);
  //execução
  await userEvent.type(inputTarefa, "nova tarefa");

  //verificação
  expect(getByText(/novo post/i)).toHaveTextContent("novo post");
  expect(getByText(/Curtir/i)).toHaveTextContent("Curtir");
  expect(getByText(/Apagar/i)).toHaveTextContent("Apagar");
});
