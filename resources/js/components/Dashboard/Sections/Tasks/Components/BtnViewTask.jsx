
import { Link } from "react-router-dom"

export function BtnViewTask({idTask}){

    return <Link to={`/home/task/${idTask}`} className="btn btn-primary text-white">
        <span className="d-none d-md-inline">Ver tarea</span>
        <span className="d-inline d-md-none"><i className="fa-solid fa-eye"></i></span>
    </Link>
}
