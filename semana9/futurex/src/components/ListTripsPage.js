import React from "react";
import useAuthorization from "../hooks/useAuthorization";

function ListTripsPage() {
  useAuthorization();
  return (
    <div>
      <h1>
        <div>ListTrip</div>
      </h1>
    </div>
  );
}

export default ListTripsPage;
