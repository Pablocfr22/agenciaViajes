import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContenidoCards2 from "./ContenidoCards2";
import "../Inicio/inicio2.css";

function Card2() {
  const bloques = ContenidoCards2.map((x) => (
    <div className="card" style={{ width: "18rem", border: "none" }}>
      <img src={x.imagen} className="card-img-top" alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title p-card">{x.titulo}</h5>
        <p className="card-text p-card2">{x.contenido}</p>
        <a href="#" className="btn btn-primary">
          Reservar
        </a>
      </div>
    </div>
  ));
  return <div className="Card2">{bloques}</div>;
}

export default Card2;
