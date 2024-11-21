import { useContext } from "react"
import { taskContext } from "../Context/ContextTask"

export function EllipsisMenu({task}){

    const {setTaskSelect}=useContext(taskContext);

    return <div className="btn-group dropstart" role="group">
    <div className="btn btn-body" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
        <i className="fa-solid fa-ellipsis-vertical"></i>
    </div>

    <div className="dropdown-menu " aria-labelledby="dropdownMenuLink">
        <div className=" dropdown-header">
            Acciones
        </div>

        <button className="dropdown-item" data-bs-toggle="modal" data-bs-target="#deleteTask" onClick={()=>{
            setTaskSelect(task);
        }}>
            <i className="fa-solid fa-trash me-1" ></i> Eliminar tarea
        </button>
    </div>
</div>
}


