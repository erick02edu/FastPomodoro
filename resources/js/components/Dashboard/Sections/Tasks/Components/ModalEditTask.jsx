import { useContext, useEffect, useState } from "react"
import { taskContext } from "../Context/ContextTask"
import { FormEditTask } from "./FormEditTask";
import { BtnUpdateTask } from "./BtnUpdateTask";


export function ModalEditTask(){


    const {btnCloseModalEdit}=useContext(taskContext);
    const [returnModal,setReturnModal]=useState('')

    useEffect(()=>{
        const modalEditTask=document.getElementById('ModalEditTask')

        modalEditTask.addEventListener("show.bs.modal",(event)=>{
            const button=event.relatedTarget;
            setReturnModal(button.getAttribute("data-return-modal"));
        })
    },[])

    return  <div className="modal fade" id="ModalEditTask" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-lg"  >
            <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="staticBackdropLabel">Información de la tarea</h5>
                    <button type="button" className="btn-close" ref={btnCloseModalEdit}  data-bs-toggle="modal" data-bs-target={returnModal} data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                        <FormEditTask/>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-toggle="modal" data-bs-target={returnModal} data-bs-dismiss="modal">Close</button>
                    <BtnUpdateTask returnModal={returnModal} />
                </div>
            </div>
        </div>
    </div>

}


