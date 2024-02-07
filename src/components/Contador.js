import React, { useState } from "react";

function Contador(props) {
  const [contador, setContador] = useState(0);

  // Función para aumentar el contador en uno
  const aumentarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>
        {props.texto}: {contador}
      </p>
      <button onClick={aumentarContador}>Aumentar</button>
    </div>
  );
}

export default Contador;
