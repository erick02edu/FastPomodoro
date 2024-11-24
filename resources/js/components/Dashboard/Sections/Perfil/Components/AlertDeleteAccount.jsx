import { useContext } from "react"
import { PerfilContext } from "../../../Context/PerfilContext"

export function AlertDeleteAccount(){

    const {deleteAccount,logOut}=useContext(PerfilContext);
    const handleDeleteAccount=async()=>{
        await deleteAccount(window.user.id);
    }
    return <div className="modal fade" id="alertDeleteAccount" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-md"  >
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Eliminar cuenta</h5>
                <button type="button" className="btn-close" data-bs-toggle="modal"  data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">

                <span>Esta a punto de eliminar tu cuenta, esto borrara toda tu información y no podrás recuperarla </span>
                <strong>¿Estas seguro de eliminar tu cuenta?</strong>

            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                <button className="btn btn-danger" onClick={handleDeleteAccount} >Si estoy seguro</button>
            </div>

        </div>
    </div>
</div>
}
