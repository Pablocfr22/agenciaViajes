import React from "react";
import "../Inicio/inicio2.css";

function Card(props) {
  function over(e) {
    const article = e.currentTarget;
    const img = article.querySelector(".img-card");
    img.setAttribute("style", "height: 0px; transition: 1s");
  }

  function out(e) {
    const article = e.currentTarget;
    const img = article.querySelector(".img-card");
    img.setAttribute("style", "height: 360px; transition: 1s");
  }
  return (
    <>
      <div className="Card" onMouseOver={over} onMouseOut={out}>
        <img className="img-card" src={props.fuente} />
        <div className="text-card">
          <p className="p-card">{props.texto}</p>
          <p className="p-card2">{props.texto2}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
