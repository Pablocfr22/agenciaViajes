import "../css/testimonios.css";
import ListaTestimonios from "./ListaTestimonios";
import icon1 from "../images/star.svg";

function SectionTestimonios(props) {
  const opiniones = ListaTestimonios.map((x) => (
    <div class="card-opinion">
      <div class="estrellas">
        <img src={icon1} />
        <img src={icon1} />
        <img src={icon1} />
        <img src={icon1} />
        <img src={icon1} />
      </div>
      <p>{x.comentario}</p>
      <div class="persona">
        <div class="datos">
          <img src={x.foto} />
          <p>{x.nombre}</p>
        </div>
        <p>Usuario</p>
      </div>
    </div>
  ));
  return (
    <div class="testimonios">
      <h2>
        <span>Descubre</span> como transformamos tus sueños
      </h2>
      <div class="opiniones">{opiniones}</div>
    </div>
  );
}
export default SectionTestimonios;
