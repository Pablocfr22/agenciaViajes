import React from "react";
import "./Estilos/Contactanos.css";
import Menu from "./Menu";
import Carrusel from "./Carrusel";
import Footer from "./Footer";
import Formulario from "./Contactanos/Formulario";
import Seccion2 from "./Contactanos/Seccion2";

function Conctactanos() {
  return (
    <div className="Contactanos">
      <Carrusel />
      <Menu />
      <div className="Seccion">
        <Formulario />
        <Seccion2/>
      </div>
      <Footer />
    </div>
  );
}

export default Conctactanos;
