import "../css/SectionMaravillate.css";
import ListaMaravillate from "./ListaMaravillate";
import icon1 from "../imagenes/iconos/persona.svg";
import icon2 from "../imagenes/iconos/estrella.svg";
import icon3 from "../imagenes/iconos/hora.svg";

function SectionMaravillate(props) {
  function overmaravillate(e) {
    const img = e.currentTarget.querySelector(".imagen-card");
    img.setAttribute("style", "height:100%; transition: 1s");

    const tex = e.currentTarget.querySelector(".contenido-tour");
    tex.setAttribute("style", "opacity: 1; transition: 1s");
  }

  function outmaravillate(e) {
    const img = e.currentTarget.querySelector(".imagen-card");
    img.setAttribute("style", "height: 200%;; transition: 1s");

    const tex = e.currentTarget.querySelector(".contenido-tour");
    tex.setAttribute("style", "opacity: 0; transition: 1s");
  }

  const tarjetas = ListaMaravillate.map((x) => (
    <div class="card" onMouseOver={overmaravillate} onMouseOut={outmaravillate}>
      <div className="imagen-tour">
        <img className="imagen-card" src={x.imagen} />
        <p>$200</p>
      </div>
      <div class="contenido-tour">
        <h3>{x.titulo}</h3>
        <p>{x.descripcion}</p>
        <div class="reservar">
          <div class="icon">
            <img src={icon1} />
            <p>1 per.</p>
          </div>
          <div class="icon">
            <img src={icon2} />
            <p>4.8</p>
          </div>
          <div class="icon">
            <img src={icon3} />
            <p>3 horas</p>
          </div>
          <button class="reserva">Reservar</button>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="maravillate">
      <div class="encabezado-tours">
        <p>Inicio {">"} Tours</p>
        <h2>
          <span>Maravillate</span> con nuestros tours
        </h2>
      </div>
      <div class="cards-tours">{tarjetas}</div>
      <div class="boton">
        <button class="boton-destinos">MÁS TOURS</button>
      </div>
    </div>
  );
}
export default SectionMaravillate;
