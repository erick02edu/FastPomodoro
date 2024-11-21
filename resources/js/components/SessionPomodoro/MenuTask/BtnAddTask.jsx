import { useContext} from "react"
import { TaskContext } from "../Context/ContextTask"

export function BtnAddTask(){
    const {createTask}=useContext(TaskContext)

    return <>
        <button className="px-2 border-0 rounded-1  py-1 btn btn-primary text-white" onClick={createTask}>
            <span className="d-inline d-md-none d-lg-inline pe-1" >Agregar tarea</span>
            <i className="fa-solid fa-plus "></i>
        </button>
    </>
}

