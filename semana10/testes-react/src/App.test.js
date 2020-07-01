import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("O item que é digitado no input cujo placeholder é Novo post, deve aparecer na tela após o usuário clicar no botão adicionar, junto com os botões de curtir e apagar post", () => {
  //preparação
  const { getByPlaceholderText, getByText } = render(<App />);
  const inputPlace = getByPlaceholderText(/Novo post/i);
  const addPost = getByText(/Adicionar/i);
  //execução
  fireEvent.change(inputPlace, { target: { value: "novo post" } });
  fireEvent.click(addPost);

  //verificação
  expect(getByText(/novo post/i)).toHaveTextContent("novo post");
  expect(getByText(/Curtir/i)).toHaveTextContent("Curtir");
  expect(getByText(/Apagar/i)).toHaveTextContent("Apagar");
});

test("Ao clicar no botão apagar o post some da tela", () => {
  //preparação
  const { getByText, getByPlaceholderText } = render(<App />);
  const inputPlace = getByPlaceholderText(/Novo post/i);
  const addPost = getByText(/Adicionar/i);
  //execução
  fireEvent.change(inputPlace, { target: { value: "novo post" } });
  fireEvent.click(addPost);
  const buttonCurtir = getByText(/Curtir/i);
  fireEvent.click(buttonCurtir);

  //verificação

  expect(getByText(/Descurtir/i)).toHaveTextContent("Descurtir");
});

test("Ao clicar no botão apagar o post some da tela", () => {
  //preparação
  const { getByText, getByPlaceholderText, queryByText } = render(<App />);
  const inputPlace = getByPlaceholderText(/Novo post/i);
  const addPost = getByText(/Adicionar/i);
  //execução
  fireEvent.change(inputPlace, { target: { value: "novo post" } });
  fireEvent.click(addPost);
  const buttonApagar = getByText(/Apagar/i);

  fireEvent.click(buttonApagar);

  //verificação
  const novoPost = queryByText("novo post");

  expect(novoPost).toEqual(null);
});

test("O item que é digitado no input cujo placeholder é Novo post, deve aparecer na tela após o usuário clicar no botão adicionar, junto com os botões de curtir e apagar post", () => {
  //preparação
  const { getByPlaceholderText, getByText } = render(<App />);
  const inputPlace = getByPlaceholderText(/Novo post/i);
  const addPost = getByText(/Adicionar/i);
  //execução
  fireEvent.change(inputPlace, { target: { value: "novo post" } });
  fireEvent.click(addPost);

  //verificação
  expect(inputPlace).toHaveValue("");
});
