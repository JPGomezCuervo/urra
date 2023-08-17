import style from "./Login.module.css"

function Login (){
  return(
  <div className={style.Container}> 
      <div className="Frame">
        <div className="InnerFrame">
          <h2>Iniciar sesión</h2>
          <label htmlFor="email">Correo electrónico</label>
          <input name="email"></input>
          <label htmlFor="password">Contraseña</label>
          <input name="password"></input>
          <p>¿Olvidaste tu contraseña?</p>
          
        </div>
      </div>
      

  </div>
  )
} 

export default Login
