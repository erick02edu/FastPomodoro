import { useContext } from "react"
import { SesionContext } from "../Context/ContextSesion"

export function ConfirmDeleteSesion(){

    const {deleteSesion}=useContext(SesionContext);
    return <div className="modal" id="exampleModal" tabIndex="-1">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title">Eliminar sección</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    <p>¿Estas seguro de eliminar esta sesión</p>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal" onClick={deleteSesion}>Eliminar esta sesión</button>
                </div>
            </div>
        </div>
    </div>
}

