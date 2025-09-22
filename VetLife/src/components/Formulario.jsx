import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Formulario.css"; 

const Formulario = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    consulta: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Datos enviados:", formData);

    navigate("/agradecimiento");
  };

  return (
    <div className="page-container">
      {/* Columna izquierda con imagen */}
    <div className="left-image"></div>


      {/* Columna derecha con el formulario */}
      <div className="right-form">
        <div className="form-container">
          <h2>Consultas</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nombre"
              placeholder="Tu nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Tu teléfono"
              value={formData.telefono}
              onChange={handleChange}
              required
            />
            <textarea
              name="consulta"
              placeholder="Escribí tu consulta"
              value={formData.consulta}
              onChange={handleChange}
              required
            />
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Formulario;
