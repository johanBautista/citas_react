import React, { Fragment } from 'react';

const Formulario = () => {
  return (
    <Fragment>
      <h2>Crear cita</h2>
      <form action="">
        <label htmlFor="">Nombre Mascota</label>
        <input
          className="u-full-width"
          // id="mascota"
          name="mascota"
          placeholder="Nombre mascota"
          type="text"
        />
        <label htmlFor="">Nombre Propietario</label>
        <input
          className="u-full-width"
          // id="mascota"
          name="propietario"
          placeholder="Nombre Propietario"
          type="text"
        />
        <label htmlFor="">Fecha</label>
        <input className="u-full-width" name="fecha" type="date" />
        <label htmlFor="">Hora</label>
        <input className="u-full-width" name="hora" type="time" />
        <label htmlFor="">Sintomas</label>
        <textarea className="u-full-width" name="sintomas"></textarea>
        <button className="u-full-width button-primary" type="submit">
          Agregar Cita
        </button>
      </form>
    </Fragment>
  );
};

export default Formulario;
