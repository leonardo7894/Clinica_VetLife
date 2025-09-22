import React from "react";
import "./Agradecimiento.css"; // 👈 importa el CSS que creaste
import { Link } from "react-router-dom";

export default function Agradecimiento() {
  return (
    <div className="thanks-page">
      <div className="thanks-card">
        <h2>¡Gracias por tu consulta!</h2>
        <p>Te responderemos lo antes posible.</p>
        <Link to="/">
          <button>Volver al inicio</button>
          {/* 👆 El botón queda dentro de la tarjeta */}
        </Link>
      </div>
    </div>
  );
}
