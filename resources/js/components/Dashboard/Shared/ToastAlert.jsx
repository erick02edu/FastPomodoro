import { useContext } from "react"
import { ToastContext } from "../Context/ContextToast"

export function ToastAlert(){

    const {titleToast,contentToast,typeToast,toastAlert}=useContext(ToastContext);

    return <div className="position-fixed bottom-0 text-success end-0 p-3" style={{zIndex: 11}}>
        <div ref={toastAlert} id="toastRenameSession" className="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <i className={`fa-solid fa-circle-check me-1 ${
                    typeToast=='success' ? 'text-success' :
                    typeToast=='error' ? 'text-danger' :
                    typeToast=='warning' && 'text-warning'
                }`}></i>
            <strong className="me-auto">{titleToast}</strong>
            <small>1 mins ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div className="toast-body">
            {contentToast}
            </div>
        </div>
    </div>
}



