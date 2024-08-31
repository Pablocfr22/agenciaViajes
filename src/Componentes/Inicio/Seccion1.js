import React from "react";
import Subtitulo from "../Subtitulo";
import "../Inicio/inicio2.css";
import imagen1 from "./img-cards/MACHUPICCHU1.jpg";
import imagen2 from "./img-cards/MEXICO.jpg";
import imagen3 from "./img-cards/NEWYORK.jpg";
import imagen4 from "./img-cards/ROMA.jpg";
import Card from "./Card";
import TextoCard from "./TextoCard";
import BotonMas from "../BotonMas";

function Seccion1() {
  return (
    <>
      <div className="Seccion1 Secciones">
        <Subtitulo subtitulo="Descubre nuestros increíbles destinos" />
        <div className="contenedor-cards">
          <Card
            fuente={imagen1}
            texto="Cusco"
            texto2={TextoCard[0].contenido}
          />
          <Card
            fuente={imagen2}
            texto="Chichén Itzá"
            texto2={TextoCard[1].contenido}
          />
          <Card
            fuente={imagen3}
            texto="New York"
            texto2={TextoCard[2].contenido}
          />
          <Card fuente={imagen4} texto="Roma" texto2={TextoCard[3].contenido} />
        </div>
        <BotonMas texto="MÁS DESTINOS" />
      </div>
    </>
  );
}

export default Seccion1;
