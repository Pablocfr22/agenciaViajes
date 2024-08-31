import React from "react";
import "./Estilos/Menu.css";
import { Link } from 'react-router-dom';

function BotonMas(props) {
  return (
    <>
      <Link to = "/tour">
        <button className="BotonMas">{props.texto}</button>
      </Link>
    </>
  );
}

export default BotonMas;
