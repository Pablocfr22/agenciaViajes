import React from "react";
import Subtitulo from "./Subtitulohistoria";
import imagen1 from "../imagenes/HISTORIA/pexels-fauxels-3182781.jpg";
import "../css/Historia.css";

function Sectionhistoria() {
  /*recorrer los elementos de listacosta utilizando el 
    metodo map para crear elementos <img> */

  return (
    <div className="Sectionhistoria">
      <p className="p1">Inicio &gt; Historia</p>
      <Subtitulo texto="Nuestra Historia" />
      <p className="p-historia">
        Con nuestros destinos únicos, puedes planificar fácilmente tu próximo
        viaje inolvidable. Encuentra la aventura perfecta en minutos
      </p>
      <div className="div-historia">
        <img src={imagen1} className="img-historia" />
      </div>
      <div className="estamos">
        <h3>Estamos aquí para ayudarte a alcanzar tus sueños de viaje.</h3>
        <p>
          Compartimos tendencias y estrategias para maximizar tus experiencias
          de viaje y asegurarnos de que siempre encuentres el destino perfecto
          para ti.
          <br />
          <br />
          Descubre destinos únicos y planifica tu próxima aventura sin
          complicaciones.
        </p>
      </div>
    </div>
  );
}
export default Sectionhistoria;
