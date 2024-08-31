import React from "react";
import "./inicio2.css";
import Subtitulo from "../Subtitulo";
import PorqueElegir from "./PorqueElegir";

function Seccion3() {
  return (
    <>
      <div className="Seccion3">
        <Subtitulo subtitulo="¿Por que elegirnos?" />
        <PorqueElegir/>
      </div>
    </>
  );
}

export default Seccion3;
