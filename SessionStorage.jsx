import React, { useState, useEffect } from 'react';

// Actividad: Completar los pasos para guardar el correo y direccion en cada paso,
// a través del Session Storage


function SessionStorage() {
  const [step, setStep] = useState(1);
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [direccion, setDireccion] = useState('');

  useEffect(() => {
    // Al montar el componente, cargar los datos desde sessionStorage
    const savedNombre = sessionStorage.getItem('nombre');
    const savedCorreo = sessionStorage.getItem('correo');
    const savedDireccion = sessionStorage.getItem('direccion');

    if (savedNombre) setNombre(savedNombre);
    if (savedCorreo) setCorreo(savedCorreo);
    if (savedDireccion) setDireccion(savedDireccion);
  }, []);

  const handleNextStep = () => {
    // Guardar los datos del paso actual en sessionStorage antes de pasar al siguiente paso
    sessionStorage.setItem('nombre', nombre);
    sessionStorage.setItem('correo', correo)
    sessionStorage.setItem('direccion', direccion)

    // TO DO - que datos hace falta guardar cada vez que pasas al siguiente step

    setStep(step + 1);
  };
  

  const handleBackStep = () => {
    // TO DO - volver al step de antes
    sessionStorage.setItem('nombre', nombre)
    sessionStorage.setItem('correo', correo)
    sessionStorage.setItem('direccion', direccion)
    setStep(step -1);
  };
    const handleRollbackStep = () =>{
    setStep(1);
  }

  return (
    <div className="App">
      <h1>Formulario de Múltiples Pasos</h1>
      
      {step === 1 && (
        <div>
          <h2>Paso 1: Nombre</h2>
          <input
            type="text"
            placeholder="Introduce tu nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
          <button onClick={handleNextStep}>Siguiente</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h2>Paso 2: Correo</h2>
          <input
            type="text"
            placeholder="Introduce tu correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
          <button onClick={handleNextStep}>Siguiente</button>
          <button onClick={handleBackStep}>Atras</button>
        </div>
      )}

        {step === 3 && (
        <div>
          <h2>Paso 2: Direccion</h2>
          <input
            type="text"
            placeholder="Introduce tu direccion"
            value={direccion}
            onChange={(e) => setDireccion(e.target.value)}
          />
          <button onClick={handleNextStep}>Siguiente</button>
          <button onClick={handleBackStep}>Atras</button>
        </div>
      )}    

      {step === 4 && (
        <div>
          <h2>¡Gracias por completar el formulario!</h2>
          <p>Nombre: {nombre}</p>
          <p>Correo: {correo}</p>
          <p>Dirección: {direccion}</p>
          <button onClick={handleRollbackStep}>Reiniciar</button>
        </div>
      )}
    </div>
  );
}

export default SessionStorage;