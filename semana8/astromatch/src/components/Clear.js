import React from "react";
import axios from "axios";

function Clear(props) {
  const clearAll = () => {
    const body = {
      id: "PatusZf4mHH6UoZfYC8I",
    };
    axios
      .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego-messias/clear",
        body
      )
      .then(() => {
        props.getProfile();
        alert("Matches Resetados");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <button onClick={clearAll}>Resete</button>
    </div>
  );
}

export default Clear;
