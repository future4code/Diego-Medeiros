import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

function DashBoardPage() {
  const history = useHistory();
  const token = window.localStorage.getItem("token");

  useEffect(() => {
    const token = window.localStorage.getItem("token");

    if (token === null) {
      alert("Faça Login");
      history.push("/login");
    }
  }, [history]);

  const logout = () => {
    // Limpa tudo
    window.localStorage.clear();

    // Limpa só um campo.
    // window.localStorage.removeItem("token");
    history.push("/login");
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
