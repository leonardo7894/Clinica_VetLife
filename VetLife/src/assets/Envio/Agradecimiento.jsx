import { useNavigate } from 'react-router-dom'

function Gracias() {
  const navigate = useNavigate()

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>¡Gracias por tu Consulta! </h1>
      <p>Tu información fue enviada correctamente.</p>
      <button onClick={() => navigate('/')}>
        Volver al inicio
      </button>
    </div>
  )
}

export default Gracias
