import React, { useState } from "react";

function CambiarColorFondo() {
  const [colorFondo, setColorFondo] = useState("#282c34"); //color del prinmcipio
  const colores = ["#282c34", "#008000", "#FF0000", "#FFFF00"]; // Azul marino, Verde, Rojo, Amarill

  const cambiarColorFondo = () => {
    const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
    setColorFondo(colorAleatorio);
  };

  return (
    <div>
      <button onClick={cambiarColorFondo}>Cambiar Color de Fondo</button>
      <style>{`body { background-color: ${colorFondo}; }`}</style>
    </div>
  );
}

export default CambiarColorFondo;
