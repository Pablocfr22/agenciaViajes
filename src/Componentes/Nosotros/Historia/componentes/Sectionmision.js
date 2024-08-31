import "../css/Mision.css";
import img1 from "../imagenes/1.jpg.jpg";

function Sectionmision() {
  return (
    <div class="Sectionmision">
      <div className="contenido-mision">
        <div class="Nuestra-Mision">
          <h2>
            <span>Nuestra</span> Mision
          </h2>
          <p className="p-mision">
            {" "}
            Maximizar el potencial de nuestros clientes a través del uso de
            Internet.{" "}
          </p>
          <h2>
            <span>Nuestros</span> Valores Como Empresa
          </h2>
          <p class="p-nuestro">
            Honestidad, Lealtad, Respeto, Pasión por los desafíos, Superación
            Constante y Creatividad.
          </p>
          <h2>
            <span>Nuestra</span>Vision
          </h2>
          <p class="p-vision">
            Ser la mejor empresas de desarrollo web, reconocida por la
            innovación, simpleza y generación de valor de sus soluciones, con
            una alta productividad y calidad humana de su equipo.
          </p>
        </div>
        <div class="div-mision">
          <img src={img1} className="img-mision" />
        </div>
      </div>
    </div>
  );
}
export default Sectionmision;
