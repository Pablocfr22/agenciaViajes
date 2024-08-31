import React from "react";
import "./Estilos/Nosotros.css";
import Menu from "./Menu";
import Carrusel from "./Carrusel";
import Footer from "./Footer";
import Sectionhistoria from "./Nosotros/Historia/componentes/Sectionhistoria";
import Sectionmision from "./Nosotros/Historia/componentes/Sectionmision";
import SectionTestimonios from "./Nosotros/Testimonios/componentes/SectionTestimonios";
function Nosotros() {
  return (
    <>
      <div className="Nosotros">
        <Carrusel />
        <Menu />
        <div className="secciones">
          <Sectionhistoria />
          <Sectionmision />
          <SectionTestimonios/>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Nosotros;
