import React from "react";
import { useState, useEffect } from "react";
import './Estilos/Menu.css'

import imagen1 from "../imagenes/img/cusco.jpg";
import imagen2 from "../imagenes/img/berlin2.jpg";
import imagen3 from "../imagenes/img/coloso.jpg";
import imagen4 from "../imagenes/img/newyork2.jpg";
import imagen5 from "../imagenes/img/paris2.jpg";

const lista = [imagen1, imagen2, imagen3, imagen4, imagen5];

function Carrusel() {
  
  const [carrusel, setCarrusel] = useState(0);
  useEffect(() => {
    console.log("Carrusel Index:", carrusel); // Para verificar el índice actual
    const ciclo = setTimeout(() => {
      setCarrusel(carrusel + 1 >= lista.length ? 0 : carrusel + 1);
    }, 2500);
    return () => clearTimeout(ciclo);
  });

  return (
    <div className="Portada">
      <img className="img-portada" src={lista[carrusel]} />
    </div>
  );
}

export default Carrusel
