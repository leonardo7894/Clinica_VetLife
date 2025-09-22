import React from "react";
import { useNavigate } from "react-router-dom";
import "./Productos.css";

export default function Productos() {
  const navigate = useNavigate();

  const handleBuy = (producto) => {
    // más adelante podemos pasar datos del producto
    navigate("/checkout");
  };

  return (
   <div className="productos-page">
  <div className="producto-card">
    <h2>Juguete</h2>
    <p>Un lindo juguete para tu mascota</p>
    <button onClick={() => handleBuy("juguete")}>Comprar</button>
  </div>

  <div className="producto-card">
    <h2>Peluche</h2>
    <p>Suave peluche para tu mascota</p>
    <button onClick={() => handleBuy("peluche")}>Comprar</button>
  </div>
</div>

  );
}
