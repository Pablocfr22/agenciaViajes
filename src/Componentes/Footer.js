import React from "react";
import "./Estilos/Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Footer() {
    return (
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <Link className="nav-link px-2 text-body-secondary" to="/">
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-body-secondary" to="/destinos">
                Destinos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-body-secondary" to="/tour">
                Paquetes Turisticos
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-body-secondary" to="/nosotros">
                Nosotros
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-2 text-body-secondary" to="/contactanos">
                Contactanos
              </Link>
            </li>
          </ul>
          <p className="text-center text-body-secondary">
            &copy; 2024 ExploraMundo, Inc
          </p>
        </footer>
      </div>
    );
  }

export default Footer;
