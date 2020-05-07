import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {
  // array de citas
  const [citas, guardarCitas] = useState([]);

  // contenedor de citas antiguas y actuales
  const crearCita = (cita) => {
    console.log(cita);
    guardarCitas([...citas, cita]);
  };

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">heiii</div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
