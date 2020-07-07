import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Helmet from "react-helmet";
import { Body, Body2 } from "./styles";
import { Button } from "@material-ui/core";

function LoginPage() {
  const [newLogin, setNewLogin] = useState();
  const [newPassword, setNewPassword] = useState();
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (token !== null) {
      history.replace("/dashboard");
    }
  }, [history]);

  const goToDashBoard = () => {
    history.replace("/dashboard");
  };

  const Login = () => {
    const body = {
      email: newLogin,
      password: newPassword,
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/diego-messias-mello/login",
        body
      )

      .then((response) => {
        localStorage.setItem("token", response.data.token);
        goToDashBoard();
        console.log(response);
      })
      .catch((error) => {
        alert("Login incorreto, por favor tente novamente");
        console.log(error);
      });
  };

  const handleLogin = (event) => {
    setNewLogin(event.target.value);
  };
  const handlePassword = (event) => {
    setNewPassword(event.target.value);
  };

  return (
    <Body>
      <Helmet title="Login" />
      <h1>
        <div>Login</div>
      </h1>
      <div>
        <input
          type="text"
          value={newLogin}
          onChange={handleLogin}
          placeholder="LOGIN"
        ></input>
        <input
          type="password"
          value={newPassword}
          onChange={handlePassword}
          placeholder="SENHA"
        ></input>
      </div>
      <div>
        <Button
          onClick={Login}
          variant="contained"
          color="primary"
          size="large"
        >
          LOGIN
        </Button>
        <Button
          onClick={goBack}
          variant="contained"
          color="secondary"
          size="large"
        >
          Voltar
        </Button>
      </div>
    </Body>
  );
}

export default LoginPage;
