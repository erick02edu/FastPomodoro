import { useContext } from "react"
import { GroupTaskContext } from "../Context/ContextGroupTask"
import { NavLink } from "react-router-dom";

export function GroupTask({group}){

    function formatearFecha(fechaISO) {

        const fecha = new Date(fechaISO);
        return new Intl.DateTimeFormat('es-ES', {
            day: 'numeric',
            month: 'long',
            year: 'numeric'
        }).format(fecha);
    }

    const {setGroupSelect}=useContext(GroupTaskContext);

    return <div className="p-3 bg-body rounded-2 shadow-sm my-3">
        <h4>{group.nameGroup}</h4>
        <small>Editado por ultima vez el {formatearFecha(group.created_at)}</small>

        <div className="d-flex gap-2 mt-2">

            <NavLink to={`/home/task/group/${group.id}`} >
                <button className="btn btn-primary text-white">
                    Ver grupo
                </button>
            </NavLink>

            <button className="btn btn bg-danger" data-bs-toggle="modal" data-bs-target="#deleteGroup"
            onClick={()=>setGroupSelect(group)}>
                <i className="fa-solid fa-trash text-white"></i>
            </button>
        </div>

    </div>
}
