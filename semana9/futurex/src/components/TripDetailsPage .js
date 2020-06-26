import React from "react";
import useAuthorization from "../hooks/useAuthorization";

function TripDetailsPage() {
  useAuthorization();
  return (
    <h1>
      <div>TripDetails</div>
    </h1>
  );
}

export default TripDetailsPage;
