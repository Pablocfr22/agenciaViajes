import React from "react";
import "../css/Destino.css";
import Subtitulo from "./Subtitulo";
import Listacosta from "./Listaperu";

function Sectionperu() {
  function overperu(e) {
    const article = e.currentTarget;
    const img = article.querySelector(".img-peru");
    img.setAttribute("style", "height:0px;transition:1s");
  }
  function outperu(e) {
    const article = e.currentTarget;
    const img = article.querySelector(".img-peru");

    img.setAttribute("style", "height:360px;transition:0.5s");
  }
  /*recorrer los elementos de listacosta utilizando el 
    metodo map para crear elementos <img> */
  const imagenes = Listacosta.map((x, index) => (
    <article
      key={index}
      className="img-container"
      onMouseOver={overperu}
      onMouseOut={outperu}
    >
      <img className="img-peru" src={x.imagen} alt="" />

      <img className="icono" src={x.icono} alt={x.descripcion} />
      <p>{x.descripcion}</p>
      <div className="descripcion-a">{x.descripcionAdicional}</div>
    </article>
  ));
  return (
    <>
      <div className="Sectionperu">
        <p className="p1">Inicio &gt; Destinos</p>
        <Subtitulo texto="Conoce la belleza del Peru" />
        <div className="div-peru">{imagenes}</div>
        <div className="boton">
          <button className="boton-destinos">MÁS DESTINOS</button>
        </div>
      </div>
    </>
  );
}
export default Sectionperu;
