import React from "react";

function Planets(props) {
  return (
    <select
      required
      name="planeta"
      value={props.value}
      onChange={props.onChange}
    >
      <option value="">Escolha um planeta</option>
      <option value="Mercúrio">Mercúrio</option>
      <option value="Vênus">Vênus</option>
      <option value="Terra">Terra</option>
      <option value="Marte">Marte</option>
      <option value="Júpiter">Júpiter</option>
      <option value="Saturno">Saturno</option>
      <option value="Urano">Urano</option>
      <option value="Netuno">Netuno</option>
    </select>
  );
}

export default Planets;
