import { useContext, useEffect, useState } from "react"
import { SelectTask } from "../../Tasks/Components/SelectTask";
import { ChargingSpinner } from "../../../../Shared/ChargingSpinner";
import { SesionContext } from "../Context/ContextSesion";

export function ModalAddTaskSesion({sesion}){

    const [taskSelect,setTaskSelect]=useState([]);
    const [taskCompletSelect,setTaskCompletSelect]=useState([]);

    const {addTasksToSesion,setInfoSesion}=useContext(SesionContext);

    const [isOpen,setIsOpen]=useState(false);

    const updateTaskSelect=(selectTasksComponent)=>{
        setTaskCompletSelect(selectTasksComponent);
        selectTasksComponent=selectTasksComponent.map(task=>task.id)
        setTaskSelect(selectTasksComponent)
    }

    const addTasksSesion=async()=>{

        await addTasksToSesion(sesion.id,taskSelect);

        console.log(taskCompletSelect);

        let newTasks=[...sesion.tasks,...taskCompletSelect]

        console.log(newTasks)
        //newTasks.sort((a,b)=>a.id-b.id);

        setInfoSesion(prevInfoSesion=>{
            return {
                ...prevInfoSesion,
                'tasks':newTasks
            }
        })
    }

    useEffect(()=>{
        const modal=document.getElementById('ModalAddTaskSesion');
        modal.addEventListener('shown.bs.modal',()=>setIsOpen(true));
        modal.addEventListener('hidden.bs.modal',()=>setIsOpen(false));

        return ()=>{
            modal.removeEventListener('show.bs.modal',()=>setIsOpen(true));
            modal.removeEventListener('hidden.bs.modal',()=>setIsOpen(false));
        }
    },[])

    return <div className="modal fade" id="ModalAddTaskSesion" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg"  >
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">Agregar tareas a {sesion.name}</h5>
                <button type="button" className="btn-close"  data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                {
                    isOpen ? <>
                        <span>Selecciona las tareas que deses agregar a esta sesión</span>
                        <SelectTask name="addTaskToSesion" tasks={taskSelect} setTask={updateTaskSelect} omitTask={sesion.tasks} returnModalCloseModalEdit="#ModalAddTaskSesion"/>
                    </> :
                    <div className="w-100 d-flex justify-content-center align-items-center" style={{height:'40vh'}}>
                        <ChargingSpinner/>
                    </div>
                }
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-primary text-white" data-bs-dismiss="modal"
                onClick={addTasksSesion} disabled={!taskSelect.length>0}>Agregar tareas</button>
            </div>
        </div>
    </div>

</div>
}
