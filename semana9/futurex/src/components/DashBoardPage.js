import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuthorization from "../hooks/useAuthorization";
import Helmet from "react-helmet";
import { Body, Body2 } from "./styles";
import { Button } from "@material-ui/core";

function DashBoardPage() {
  const history = useHistory();
  const token = window.localStorage.getItem("token");

  useAuthorization();
  const logout = () => {
    // Limpa tudo
    window.localStorage.clear();

    // Limpa só um campo.
    // window.localStorage.removeItem("token");
    history.replace("/login");
  };

  const goBack = () => {
    history.goBack();
  };

  const goToDetails = () => {
    history.push("/dashboard/details");
  };
  const goToCreate = () => {
    history.push("/dashboard/create");
  };
  const goToTrips = () => {
    history.push("/dashboard/list");
  };

  if (token) {
    return (
      <Body>
        <Helmet title="Dashboard" />
        <div>
          <h1>DashBoard</h1>
        </div>
        <Body2>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={goToDetails}
          >
            Detalhes da Viagem
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={goToCreate}
          >
            Criar Viagem
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={goToTrips}
          >
            Lista Viagens
          </Button>
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={logout}
          >
            LOGOUT
          </Button>
          <Button
            variant="contained"
            color="secondary"
            size="large"
            onClick={goBack}
          >
            Voltar
          </Button>
        </Body2>
      </Body>
    );
  } else {
    return <div></div>;
  }
}

export default DashBoardPage;
