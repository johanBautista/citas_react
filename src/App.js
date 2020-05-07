import React, { Fragment, useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {
  // array de citas
  const [citas, guardarCitas] = useState([]);

  // useEffect realiza operaciones cada vez q el satet se modifica
  useEffect(() => { //useEffect siempre va con un callback, es similar a componentDidMount y DidUpdate
    console.log('listo');
  }, [citas]); // el array es obligatorio sino se cicla el estado

  // contenedor de citas antiguas y actuales
  const crearCita = (cita) => {
    console.log(cita);
    guardarCitas([...citas, cita]);
  };

  // func eliminar cita
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    guardarCitas(nuevasCitas);
  };

  // mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>

            {citas.map((cita) => (
              <Cita cita={cita} eliminarCita={eliminarCita} key={cita.id} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
