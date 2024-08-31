import React from "react";
import Menu from "./Menu";
import "./Estilos/Inicio.css";
import Carrusel from "./Carrusel";
import Seccion1 from "./Inicio/Seccion1";
import Seccion2 from "./Inicio/Seccion2";
import Seccion3 from "./Inicio/Seccion3";
import Footer from "./Footer";

function Inicio() {
  return (
    <>
      <div className="Inicio">
        <Carrusel />
        <Menu />
        <Seccion1 />
        <Seccion2 />
        <Seccion3 />
        <Footer/>
      </div>
    </>
  );
}

export default Inicio;
