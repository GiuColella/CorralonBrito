import React, { useState } from 'react';

// Componente de Facturación
const Facturacion = () => {
  const [personas, setPersonas] = useState(['Persona 1', 'Persona 2', 'Persona 3', 'Persona 4', 'Persona 5']);
  const [personaActual, setPersonaActual] = useState(null);

  return (
    <div>
      {personas.map((persona) => (
        <button key={persona} onClick={() => setPersonaActual(persona)}>
          Ver factura de {persona}
        </button>
      ))}

      {personaActual && <Factura nombre={personaActual} />}
    </div>
  );
};

export default Facturacion;
