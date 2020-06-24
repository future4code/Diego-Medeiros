import React from "react";
import { useHistory } from "react-router-dom";

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
      <h1>
        <div>Home</div>
      </h1>
      <button onClick={goToLogin}>Login</button>
      <button onClick={goToApplicationForm}>Formulario</button>
    </div>
  );
}

export default HomePage;
