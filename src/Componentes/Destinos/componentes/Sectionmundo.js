import React from "react";
import "../css/Destino.css";
import Subtitulo from "./Subtitulo";
import Listamundo from "./Listamundo";

function Sectionmundo() {
  /*recorrer los elementos de listacosta utilizando el 
    metodo map para crear elementos <img> */
  const imagenes = Listamundo.map((x, index) => (
    <div key={index} className="img-containermundo">
      <img className="img-mundo" src={x.imagen} alt="" />
      <div className="descripcion-containermundo">
        <img className="icono-1" src={x.icono} alt={x.descripcion} />
        <p>{x.descripcion}</p>
      </div>
    </div>
  ));
  return (
    <div className="Sectionmundo">
      <Subtitulo texto="Explora el viejo mundo" />
      <div className="div-mundo">{imagenes}</div>
      <div className="boton">
        <button className="boton-destinos">MÁS DESTINOS</button>
      </div>
    </div>
  );
}
export default Sectionmundo;
