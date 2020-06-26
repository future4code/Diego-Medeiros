import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [newLogin, setNewLogin] = useState();
  const [newPassword, setNewPassword] = useState();
  const history = useHistory();

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

  console.log(newLogin);
  console.log(newPassword);

  return (
    <div>
      <h1>
        <div>Login!</div>
      </h1>
      <div>
        <input value={newLogin} onChange={handleLogin}></input>
        <input value={newPassword} onChange={handlePassword}></input>
      </div>
      <button onClick={Login}>LOGIN</button>
    </div>
  );
}

export default LoginPage;
