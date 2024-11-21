import { Link } from "react-router-dom"

export function BtnViewSesion({idSesion}){
    return <Link to={`/home/sesiones/${idSesion}`} className="btn btn-primary text-white">
        <span className="d-none d-md-inline">Ver sesión</span>
        <span className="d-inline d-md-none"><i className="fa-solid fa-eye"></i></span>
    </Link>
}

