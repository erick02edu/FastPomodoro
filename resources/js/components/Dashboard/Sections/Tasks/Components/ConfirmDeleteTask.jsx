import { useContext } from "react";
import { taskContext } from "../Context/ContextTask";

export function ConfirmDeleteTask(){

    const {TaskSelect,deleteTask}=useContext(taskContext);

    return <div className="modal" id="deleteTask" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Eliminar tarea</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>¿Estas seguro de eliminar la tarea {TaskSelect?.NombreTask}</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                    onClick={()=>deleteTask()}>Eliminar esta sesión</button>
                </div>
            </div>
        </div>
    </div>

}
