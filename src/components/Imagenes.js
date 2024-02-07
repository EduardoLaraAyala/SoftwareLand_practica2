import React, { useState } from "react";
import img1 from "../2022-07-02 (1).png";
import img2 from "../alena-aenami-aenami-lunar.jpg";
import img3 from "../alena-aenami-endless-1k.jpg";
import img4 from "../alena-aenami-horizon-1k.jpg";

function Imagen() {
  // estado de la imagen actual
  const [imagenActual, setImagenActual] = useState(img1);

  //cambiar la imagen al hacer clic en el botón
  const cambiarImagen = () => {
    switch (imagenActual) {
      case img1:
        setImagenActual(img2);
        break;
      case img2:
        setImagenActual(img3);
        break;
      case img3:
        setImagenActual(img4);
        break;
      case img4:
        setImagenActual(img1); // Volvemos al inicio
        break;
      default:
        setImagenActual(img1);
        break;
    }
  };

  return (
    <div>
      <img src={imagenActual} alt="Imagen" style={{ maxWidth: "70%" }} />
        <br></br>
      <button onClick={cambiarImagen}>Cambiar Imagen</button>
    </div>
  );
}

export default Imagen;
