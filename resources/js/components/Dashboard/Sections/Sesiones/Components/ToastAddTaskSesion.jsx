import { SesionContext } from "../Context/ContextSesion";
import { useContext } from "react";

export function ToastAddTaskSesion(){

    const {refToastAddTaskSesion}=useContext(SesionContext);

    return <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 11}}>
        <div ref={refToastAddTaskSesion} id="toastRenameSession" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
            <i className="fa-solid fa-circle-check text-success me-1"></i>
            <strong className="me-auto">Tareas agregadadas</strong>
            <small>1 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
                Se han agregado correctamente las tareas a este grupo
            </div>
        </div>
    </div>
}





