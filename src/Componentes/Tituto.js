import React from "react";

function Titulo(props) {
  return (
    <div className="Titulo">
      <h1 className="h1-Titulo">{props.texto}</h1>
    </div>
  );
}

export default Titulo;