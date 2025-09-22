import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Checkout.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // 👇 recibimos el producto desde la navegación
  const producto = location.state?.producto || {
    nombre: "Producto",
    descripcion: "Descripción genérica",
    precio: 1000,
  };

  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    direccion: "",
    pago: "tarjeta",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // 👇 pasamos los datos a la confirmación
    navigate("/confirmacion", {
      state: {
        producto,
        formData,
        numeroEnvio: Math.floor(Math.random() * 1000000), // nro random
      },
    });
  };

  return (
    <div className="checkout-container">
      {/* Columna izquierda */}
      <div className="checkout-producto">
        <h2>Tu compra</h2>
        <div className="producto-card">
          <h3>{producto.nombre}</h3>
          <p>{producto.descripcion}</p>
          <p className="precio">${producto.precio}</p>
        </div>
      </div>

      {/* Columna derecha */}
      <div className="checkout-formulario">
        <h2>Datos de envío</h2>
        <form onSubmit={handleSubmit}>
          <label>Nombre completo</label>
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label>Dirección</label>
          <input
            type="text"
            name="direccion"
            value={formData.direccion}
            onChange={handleChange}
            required
          />

          <label>Método de pago</label>
          <select
            name="pago"
            value={formData.pago}
            onChange={handleChange}
          >
            <option value="tarjeta">Tarjeta de crédito</option>
            <option value="debito">Tarjeta de débito</option>
            <option value="efectivo">Efectivo</option>
            <option value="mercadopago">MercadoPago</option>
          </select>

        <div className="checkout-container">
  <div className="checkout-box">
    {/* Columna izquierda */}
    <div className="checkout-producto"> ... </div>

    {/* Columna derecha */}
    <div className="checkout-formulario"> ... </div>
  </div>
</div>
 

          <button type="submit">Confirmar compra</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
