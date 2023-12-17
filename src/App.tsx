import './App.css'

function App() {

  return (
    <>
     <form action="#" method="post">
      <h2>Bienvenido HTML Indra</h2>
      <label >Usuario:</label>
      <input type="text" id="usuario" name="usuario" required /><br /><br />

      <label >Contraseña:</label>
      <input type="password" id="contraseña" name="contraseña" required /><br /><br />

      <input type="submit" value="Iniciar sesión" />
    </form>
    </>
  )
}

export default App
