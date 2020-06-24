import React from "react";
import { useHistory } from "react-router-dom";

function LoginPage() {
  const history = useHistory();
  const goToTrips = () => {
    history.push("/trips/list");
  };
  return (
    <div>
      <h1>
        <div>Login!</div>
      </h1>
      <button onClick={goToTrips}>Login</button>
    </div>
  );
}

export default LoginPage;
