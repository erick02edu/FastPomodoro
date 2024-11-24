import { useContext } from "react"
import { taskContext } from "../Context/ContextTask"

export function BtnOpenModalEditTask({task,contentButton=null,returnModal=""}){

    const {setFormEditTask}=useContext(taskContext)
    return <>
        {
            !contentButton ?
            <button className="btn btn-primary text-white" data-bs-toggle="modal" data-bs-target="#ModalEditTask" data-return-modal={returnModal} onClick={
                ()=>{
                    setFormEditTask(task)
                }
            } >
                {contentButton || "Ver tarea completa"}
            </button>
            :<button className="btn p-0" data-bs-toggle="modal" data-bs-target="#ModalEditTask" data-return-modal={returnModal} onClick={
                ()=>{
                    setFormEditTask(task)
                }
            } >
                {contentButton}
            </button>
        }
    </>

}







