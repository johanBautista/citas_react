import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  // array de citas
  const [citas, guardarCitas] = useState([]);

  // contenedor de citas antiguas y actuales
  const crearCita = (cita) => {
    console.log(cita);
    guardarCitas([...citas, cita]);
  };
  /**
  1. mapear el array de citas y pasar el componente cita
  2. pasar key y obj cita
  3. en comp. Cita destructuring de cita y sus propiedades para imprimir el obj
  4. boton de eliminar cita
   */

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(cita =>(
              <Cita  cita={cita} key={cita.id} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
