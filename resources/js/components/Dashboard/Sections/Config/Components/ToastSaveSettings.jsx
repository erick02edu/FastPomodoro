import { useContext } from "react"
import { ConfigContext } from "../Context/ContextConfig"



export function ToastSaveSettings(){

    const {refToastSavefSettings}=useContext(ConfigContext)

    return <div className="position-fixed bottom-0 end-0 p-3" style={{zIndex: 11}}>
        <div ref={refToastSavefSettings} id="toastRenameSession" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
            <i className="fa-solid fa-circle-check text-success me-1"></i>
            <strong className="me-auto">Configuración guardada</strong>
            <small>1 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
            Se ha guardado la configuración correctamente
            </div>
        </div>
    </div>
}





