import { LogoFastPomodoro } from "../../Shared/LogoFastPomodoro";
import { Link } from "react-router-dom";

export function Menu(){

    return <nav className="navbar navbar-expand-lg bg-body-tertiary py-3 w-100 position-sticky top-0 border-bottom shadow-lg" style={{zIndex:"1000"}}>
        <div className="container d-flex justify-content-between">
            <a className="navbar-brand" href="#">
                <LogoFastPomodoro/>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">

                <ul className="navbar-nav align-items-center gap-3">

                <li className="nav-item">
                    <Link className="text-decoration-none text-body" aria-current="page" to="/#Home">Bienvenida</Link>
                </li>

                <li className="nav-item">
                    <Link className="text-decoration-none text-body" aria-current="page" to="/#presentacion">Sobre nosotros</Link>
                </li>

                <li className="nav-item">
                    <Link className="text-decoration-none text-body " aria-current="page" to="/#beneficios">Beneficios</Link>
                </li>



                <li className="nav-item dropdown">
                    <a className="text-decoration-none text-body dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Funciones
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/funciones/crearSesion">Creación de sesiones de estudio</a></li>
                        <li><a className="dropdown-item" href="/funciones/SesionesEstudio">Información sobre  sesiones de estudio</a></li>
                        <li><a className="dropdown-item" href="/funciones/PanelEstudio">Panel de sesión pomodoro</a></li>
                    </ul>
                </li>
                </ul>
            </div>

            <div className="d-none d-lg-block">
                <a  type="button" className="btn btn-primary text-white" href="/login">Iniciar sesión</a>
            </div>
        </div>
    </nav>



}




