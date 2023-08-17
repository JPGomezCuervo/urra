import style from "./Login.module.css";

function Login (){
  return(
    <div className={style.login_mainContainer}> 
      <div className={`Frame`}>

        <div className={ `InnerFrame ${style.login_innerframe}` }>

          <h2>Iniciar sesión</h2>

          <div className={style.login_emailContainer}>
            <label htmlFor="email">Correo electrónico</label>
            <input name="email"></input>
          </div>

          <div className={style.login_emailContainer}>
            <label htmlFor="password">Contraseña</label>
            <input name="password"></input>
          </div>

          <p>¿Olvidaste tu contraseña?</p>
          <button className={`Main_button ${style.login_button_submit}`}>Ingresar</button>

        </div>

      </div>


    </div>
  )
} 

export default Login
