import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'   // mantené este
import Formulario from './assets/Envio/Formulario.jsx';
import Gracias from './assets/Envio/Agradecimiento.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: formulario */}
        <Route path="/" element={<Formulario />} />

        {/* Página de agradecimiento */}
        <Route path="/gracias" element={<Gracias />} />

        {/* Ruta opcional: la app base de Vite */}
        <Route path="/vite" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
