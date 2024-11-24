
import { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { GroupTaskContext } from "../Context/ContextGroupTask";
import { ChargingSpinner } from "../../../../Shared/ChargingSpinner";
import { ModalAddTaskToGroup } from "../Components/ModalAddTaskToGroup";
import { TaskBoxForGroup } from "../Components/TaskBoxForGroup";

export default function GroupTasksDetails(){

    const {id}=useParams();
    const {formEditGroup,getTaskGroup,isLoadingTaskGroup}=useContext(GroupTaskContext);

    useEffect(()=>{
        getTaskGroup(id);
    },[])

    useEffect(()=>{

    },[formEditGroup])

    return <div>
        <div>
            {
                isLoadingTaskGroup?
                <div className="d-flex justify-content-center align-items-center rounded-2" style={{height:'80vh'}}>
                    <ChargingSpinner/>
                </div>
                :
                <div className="w-100">

                    <h4><strong>{formEditGroup?.name}</strong></h4>

                    <ModalAddTaskToGroup/>

                    <span>Lista de tareas de este grupo</span>

                    <div className="mt-2 d-flex gap-3 flex-column">
                    {
                        formEditGroup?.tasksSelect.map(task=>
                        <>
                            <TaskBoxForGroup task={task} key={task.id} idGrupo={id}/>
                        </>
                        )
                    }

                        <button className="p-2 bg-opacity-10 btn btn-outline-secondary text-opacity-50 rounded-3" style={{border:'1px dashed'}}
                        data-bs-toggle="modal" data-bs-target="#modalAddTaskToGroup">
                            <div className="d-flex flex-column gap-1 py-2 justify-content-center align-items-center">
                                <div>
                                    <i className="fa-solid fa-plus"></i>
                                </div>
                                <div>Agregar mas tareas</div>
                            </div>
                        </button>
                    </div>
                </div>
            }
        </div>
    </div>
}
