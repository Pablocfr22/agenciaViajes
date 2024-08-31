import React from "react";
import "./Estilos/Tour.css";
import Menu from "./Menu";
import Carrusel from "./Carrusel";
import Footer from "./Footer";
import PageTours from "./Tour/componentes/PageTours";

function Tour() {
  return (
    <div className="Tour">
      <Carrusel />
      <Menu />
      <PageTours/>
      <Footer/>
    </div>
  );
}

export default Tour;
