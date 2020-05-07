import React, { Fragment, useState } from 'react';

const Formulario = () => {
  const [cita, actualizarCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });

  // captura de los input
  const actualizarState = (e) => {
    actualizarCita({
      ...cita, //spread operator
      [e.target.name]: e.target.value, //destruturing array
    });
  };

  // extraer los valores
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // envio del form
  const submitCita = (e) => {
    e.preventDefault(); // no envia los valores por get
    // validaciones

    //asignar id-key

    // crear la cita

    // reiniciar el form
  };

  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form action="" onSubmit={submitCita}>
        <label htmlFor="">Nombre Mascota</label>
        <input
          className="u-full-width"
          name="mascota"
          onChange={actualizarState}
          placeholder="Nombre mascota"
          type="text"
          value={mascota}
        />
        <label htmlFor="">Nombre Propietario</label>
        <input
          className="u-full-width"
          name="propietario"
          onChange={actualizarState}
          placeholder="Nombre Propietario"
          type="text"
          value={propietario}
        />
        <label htmlFor="">Fecha</label>
        <input
          className="u-full-width"
          name="fecha"
          onChange={actualizarState}
          type="date"
          value={fecha}
        />
        <label htmlFor="">Hora</label>
        <input
          className="u-full-width"
          name="hora"
          onChange={actualizarState}
          type="time"
          value={hora}
        />
        <label htmlFor="">Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={actualizarState}
          value={sintomas}
        ></textarea>

        <button className="u-full-width button-primary" type="submit">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
