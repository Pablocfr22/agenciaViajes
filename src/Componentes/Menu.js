import React from "react";
import { Link } from "react-router-dom";
import "./Estilos/Menu.css";
import Titulo from "./Tituto";
function Menu() {
  return (
    <>
      <div className="contenedor-menu">
        <div className="Menu">
          <Link className="link-menu" to="/">
            Inicio
          </Link>
          <Link className="link-menu" to="/destinos">
            Destinos
          </Link>
          <Link className="link-menu" to="/tour">
            Paquetes Turisticos
          </Link>
          <Link className="link-menu" to="/nosotros">
            Nosotros
          </Link>
          <Link className="link-menu" to="/contactanos">
            Contactanos
          </Link>
          <button className="boton-sesion" to="/sesion">
            Iniciar Sesión
          </button>
        </div>
        <div className="texto-central">
          <Titulo className="Titulo" texto="SUMERGETE EN LA" />
          <Titulo className="Titulo" texto="MAGIA DE VIAJAR" />
          <button className="reserva">RESERVA TU PROXIMA AVENTURA</button>
        </div>
      </div>
    </>
  );
}

export default Menu;
