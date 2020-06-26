import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import useAuthorization from "../hooks/useAuthorization";

function DashBoardPage() {
  const token = window.localStorage.getItem("token");
  const history = useHistory();
  useAuthorization();
  const logout = () => {
    // Limpa tudo
    window.localStorage.clear();

    // Limpa só um campo.
    // window.localStorage.removeItem("token");
    history.replace("/login");
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
      <div>
        <h1>
          <div>DashBoard</div>
        </h1>
        <button onClick={goToDetails}>Detalhes da Viagem</button>
        <button onClick={goToCreate}>Criar Viagem</button>
        <button onClick={goToTrips}>Lista Viagens</button>
        <button onClick={logout}>LOGOUT</button>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default DashBoardPage;
