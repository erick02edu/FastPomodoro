import { useContext } from "react"
import { taskContext } from "../Context/ContextTask"

export function BtnUpdateTask({returnModal="",returnPage=null}){

    const {updateTask}=useContext(taskContext);

    return <>
        <button type="button" onClick={()=>updateTask(returnPage)} data-bs-toggle="modal" data-bs-target={returnModal} className="btn btn-primary text-white">Guardar cambios</button>
    </>
}
