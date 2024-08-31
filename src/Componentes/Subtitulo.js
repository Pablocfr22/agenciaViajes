import React from "react";
import "./Estilos/Menu.css";

function Subtitulo(props) {
  return (
    <div className="Subtitulo">
      <h1 className="h1-subtitulo">{props.subtitulo}</h1>
    </div>
  );
}

export default Subtitulo