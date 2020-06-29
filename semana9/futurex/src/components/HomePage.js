import React from "react";
import { useHistory } from "react-router-dom";
import Helmet from "react-helmet";
import { Body, Body2 } from "./styles";
import { Button } from "@material-ui/core";

function HomePage() {
  const history = useHistory();

  const goToLogin = () => {
    history.push("/login");
  };

  const goToApplicationForm = () => {
    history.push("/application-form");
  };

  return (
    <div>
      <Helmet title="Home" />
      <Body>
        <h1>Home</h1>
      </Body>
      <Body2>
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={goToLogin}
        >
          Login
        </Button>
        <Button
          onClick={goToApplicationForm}
          variant="contained"
          color="secondary"
          size="large"
        >
          Formulario
        </Button>
      </Body2>
    </div>
  );
}

export default HomePage;
