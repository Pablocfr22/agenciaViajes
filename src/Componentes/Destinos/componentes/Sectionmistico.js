import React from "react";
import "../css/Destino.css";
import Subtitulo from "./Subtitulo";
import Listamistico from "./Listamistico";

function Sectionmistico() {
  const imagenes = Listamistico.map((x, index) => (
    <div key={index} className="img-containermistico">
      <img className="img-mistico" src={x.imagen} alt="" />
      <div className="descripcion-containermistico">
        <img className="icono-2" src={x.icono} alt={x.descripcion} />
        <p>{x.descripcion}</p>
      </div>
    </div>
  ));
  return (
    <div className="Sectionmistico">
      <Subtitulo texto="Enamorate de lo mistico" />
      <div className="div-mistico">{imagenes}</div>
      <div className="boton">
        <button className="boton-destinos">MÁS DESTINOS</button>
      </div>
    </div>
  );
}
export default Sectionmistico;
