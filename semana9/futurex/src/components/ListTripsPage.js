import React from "react";
import { useHistory } from "react-router-dom";

function ListTripsPage() {
  const history = useHistory();
  const goToDetails = () => {
    history.push("/trips/details");
  };
  const goToCreate = () => {
    history.push("/trips/create");
  };
  return (
    <div>
      <h1>
        <div>ListTrip</div>
      </h1>
      <button onClick={goToDetails}>Detalhes da Viagem</button>
      <button onClick={goToCreate}>Criar Viagem</button>
    </div>
  );
}

export default ListTripsPage;
