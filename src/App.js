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
  /**
   1.crear el state de cita en el componente padre: App
   2.crear la funcion q guardara una copia de las citas ya hechas y la nueva q se crea
   3.pasar por prop la funcion crearCita al componente Formulario
   4.en formulario crear la cita y devolverla al comp padre por medio de la funcion crearCita
   5. comprobar con .log en el comp padre: App si es correcto el flujo de datos
   6.usar guardarCitas como nuevo state contenedor. spread operator de citas para guardar las antiguas
   y cita q es la nueva cita creada
   */

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
