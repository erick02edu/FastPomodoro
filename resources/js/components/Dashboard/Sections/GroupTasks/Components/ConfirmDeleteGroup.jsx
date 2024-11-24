import { useContext } from "react"
import { GroupTaskContext } from "../Context/ContextGroupTask"

export function ConfimDeleteGroup(){
    const {GroupSelect,deleteGroup}=useContext(GroupTaskContext);

    return  <div className="modal" id="deleteGroup" tabIndex="-1">
    <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title">Eliminar tarea</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                <p>¿Estas seguro de eliminar al grupo {GroupSelect?.nameGroup}</p>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-danger" data-bs-dismiss="modal"
                onClick={()=>deleteGroup()}>Eliminar este grupo</button>
            </div>
        </div>
    </div>
</div>

}

