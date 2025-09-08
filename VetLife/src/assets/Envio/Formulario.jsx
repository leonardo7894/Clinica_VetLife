import { useNavigate } from 'react-router-dom'

function Formulario() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/gracias')
  }

  return (
    <div
      style={{
        display: 'grid',
        placeItems: 'center', // centra horizontal y vertical
        height: '70vh',      // altura completa de la ventana
        padding: '20px'
      }}
    >
      <div 
        style={{
          width: '400px',       // ancho del formulario
          // Aquí puedes moverlo usando margin
          marginLeft: '500px',   // empuja a la derecha
          marginRight: '0',     // puedes ajustar a tu gusto
          border: '1px solid #ccc',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}
      >
        <h1>Consultas</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input type="text" name="nombre" required />
          </div>

          <div>
            <label>Apellido:</label>
            <input type="text" name="apellido" required />
          </div>

          <div>
            <label>Email:</label>
            <input type="email" name="email" required />
          </div>

            <div>
            <label>Consulta:</label>
            <input type="text" name="nombre" required />
          </div>


          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}

export default Formulario
