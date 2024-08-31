import "../Estilos/Contactanos.css";
import React from "react";

function Seccion2() {
  return (
    <>
      <div className="Seccion2">
        <div className="titulo-seccion2">
          <h2>
            <span>Aquí </span> inicia tu aventura
          </h2>
        </div>
        <div className="contacto-derecha">
          <div className="secciones-contacto">
            <p className="subtitulo-contacto">Llamanos</p>
            <p className="texto-contacto">+51-918-664-543</p>
            <p className="texto-contacto">+51-925-444-322</p>
          </div>
          <div className="secciones-contacto">
            <p className="subtitulo-contacto">Envianos un correo al</p>
            <p className="texto-contacto">soporte@viajesperu.com</p>
            <p className="texto-contacto">atencion@viajesperu.com</p>
          </div>
          <div className="secciones-contacto">
            <p className="subtitulo-contacto">Visitanos</p>
            <p className="texto-contacto">Av. Paseo de la Republica,</p>
            <p className="texto-contacto">525, Lima</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Seccion2;
