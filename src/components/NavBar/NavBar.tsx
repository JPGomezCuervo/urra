import style from "./NavBar.module.css";
import home from "../../assets/svgs/home_white.svg";
import graph from"../../assets/svgs/graph_white.svg";
import waves from"../../assets/svgs/waves_white.svg";
import cloud from"../../assets/svgs/cloud_white.svg";
import gear from "../../assets/svgs/gear_white.svg";

function NavBar() {
  return(
    <>
      <nav className= {style.NavBar}>

        <nav className={style.navbar_grid}>

          <div className={style.navbar_home}>
            <img src={home} alt=""/>
            <p>Inicio</p>
          </div>

          <div className={style.navbar_graph}>
            <img src={graph} alt=""/>
            <p>Urrá series</p>
          </div>

          <div className={style.navbar_waves}>
            <img src={waves} alt=""/>
            <p>Ingreso datos</p>
          </div>

          <div className={style.navbar_cloud}>
            <img src={cloud} alt=""/>
            <p>Pronósticos</p>
          </div>

          <div className={style.navbar_gear}>
            <img src={gear} alt=""/>
            <p>Ajustes</p>
          </div>

        </nav>

      </nav>

    </>
  )
}

export default NavBar;
