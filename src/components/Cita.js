import React from 'react';

const Cita = ({ cita }) => {
  const { mascota, propietario, fecha, hora, sintomas } = cita;
  return (
    <div className="cita">
      <p>Mascota: {mascota}</p>
      <small>{hora}</small>
      <small>-- {fecha}</small>
      <p>
        Dueño:<span>{propietario}</span>
      </p>
      <p>
        Sintomas: <span>{sintomas}</span>
      </p>
      <button className="u-full-width button-primary" type="submit">
        Eliminar Cita
      </button>
    </div>
  );
};

export default Cita;
