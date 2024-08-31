import React from "react";
import "./Estilos/Destinos.css";
import Menu from "./Menu";
import Carrusel from "./Carrusel";
import Footer from "./Footer";
import Sectionperu from "./Destinos/componentes/Sectionperu";
import Sectionmundo from "./Destinos/componentes/Sectionmundo";
import Sectionmistico from "./Destinos/componentes/Sectionmistico";

function Destinos() {
  return (
    <>
      <div className="Destinos">
        <Carrusel />
        <Menu />
        <div className="Secciones-destino">
          <Sectionperu />
          <Sectionmundo />
          <Sectionmistico />
        </div>
        <Footer/>
      </div>
    </>
  );
}

export default Destinos;
