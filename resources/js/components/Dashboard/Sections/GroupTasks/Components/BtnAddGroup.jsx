import { useContext } from "react"
import { taskContext } from "../../Tasks/Context/ContextTask"


export function BtnAddGroup({onlyIcon=false,returnModalCreateSesion=false}){

    const {getTask}=useContext(taskContext)

    return  <button className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#ModalAddGroup"
    onClick={()=>getTask()} data-return-modal-sesion={returnModalCreateSesion.toString()}>

        {
            onlyIcon ?
            <span className="">
                <i className="fa-solid fa-plus"></i>
            </span>
            :<>
                <span className="d-none d-md-inline">Agregar grupo</span>
                <span className="d-inline d-md-none">
                    <i className="fa-solid fa-plus"></i>
                </span>
            </>

        }

    </button>
}

