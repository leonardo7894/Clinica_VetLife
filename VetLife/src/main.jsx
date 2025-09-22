import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Formulario from './components/Formulario.jsx'
import Gracias from './pages/Agradecimiento.jsx'
import Productos from './pages/Productos.jsx'
import Checkout from './pages/Checkout.jsx'   // 👈 corregido

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Ruta principal: formulario */}
        <Route path="/" element={<Formulario />} />

        {/* Página de agradecimiento */}
        <Route path="/agradecimiento" element={<Gracias />} />

        {/* Página de productos */}
        <Route path="/productos" element={<Productos />} />

        {/* Página de checkout */}
        <Route path="/checkout" element={<Checkout />} />

        {/* Ruta opcional: la app base de Vite */}
        <Route path="/vite" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
