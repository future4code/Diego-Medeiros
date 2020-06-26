import React from "react";
import useAuthorization from "../hooks/useAuthorization";

function CreateTripPage() {
  useAuthorization();
  return (
    <h1>
      <div>CreateTrip</div>
    </h1>
  );
}

export default CreateTripPage;
