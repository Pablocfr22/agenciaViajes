import React from "react";
import "../Estilos/Contactanos.css";

function Formulario() {
  function Limpiar() {
    //Limpiar los elementos del form utilice querySelecot
    document.querySelector(".txt-nombre").value = "";
    document.querySelector(".txt-email").value = "";
    document.querySelector(".txt-telefono").value = "";
    document.querySelector(".txt-mensaje").value = "";
  }

  function Enviar() {
    // Capturar los valores de los campos
    let nombre = document.querySelector(".txt-nombre").value;
    let email = document.querySelector(".txt-email").value;
    let telefono = document.querySelector(".txt-telefono").value;
    let mensaje = document.querySelector(".txt-mensaje").value;

    // Mostrar los valores en un alert
    alert(
      `Nombre: ${nombre}\nE-mail: ${email}\nTelefono: ${telefono}\nMensaje: ${mensaje}`
    );
  }

  return (
    <div className="Formulario">
      <form className="frm">
        <div className="form-group">
          <label className="subtitulo-form" htmlFor="nombre">
            Nombres y apellidos*
          </label>
          <input
            id="nombre"
            className="texto txt-nombre"
            placeholder="Ingresa tu nombre y apellido"
          />
        </div>

        <div className="form-group">
          <label className="subtitulo-form" htmlFor="email">
            Correo electrónico*
          </label>
          <input
            id="email"
            type="email"
            className="texto txt-email"
            placeholder="Ingrese su correo electrónico"
          />
        </div>

        <div className="form-group">
          <label className="subtitulo-form" htmlFor="telefono">
            Teléfono
          </label>
          <input
            id="telefono"
            className="texto txt-telefono"
            placeholder="Ingrese su número telefónico"
          />
        </div>

        <div className="form-group">
          <label className="subtitulo-form" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            className="texto txt-mensaje"
            placeholder="Ingrese su mensaje"
          ></textarea>
        </div>

        <div className="form-buttons">
          <button className="limpiar" type="button" onClick={Limpiar}>
            Borrar
          </button>
          <button className="contactar" type="submit" onClick={Enviar}>
            Contactanos
          </button>
        </div>
      </form>
    </div>
  );
}

export default Formulario;
