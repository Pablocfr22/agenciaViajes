import React from "react";
import "./inicio2.css";
import ListaPorque from "./ListaPorque";

function PorqueElegir() {
  const contenido = ListaPorque.map((x, index) => (
    <div key={index} className="item-porque">
      <i className={x.icon}></i>
      <h3 className="sub-porque">{x.subtitulo}</h3>
      <p className="contenido-porque">{x.contenido}</p>
    </div>
  ));
  return <div className="PorqueElegir">{contenido}</div>;
}

export default PorqueElegir;
