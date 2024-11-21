import { useContext } from "react";
import { TooltipTaskDetail } from "../../../Shared/TooltipTaskDetail";
import { useNavigate } from "react-router";
import { GroupTaskContext } from "../Context/ContextGroupTask";

export function TaskBoxForGroup({task,idGrupo}){

    const {deleteTaskForGroup}=useContext(GroupTaskContext)

    const getPageTask=(idTask)=>{
        navigation(`/home/task/${idTask}`)
    }

    let navigation=useNavigate();

    return <div className="bg-body text-white border border-gray-500 py-2 px-3 rounded-1 text-body " onDoubleClick={()=>{getPageTask(task.id)}}  >

        <TooltipTaskDetail task={task} anchorSelect={`#taskInfo${task.id}`}/>


        <div className="d-flex w-100 justify-content-between ">

            <div className="d-flex flex-column">
                <strong>{task.NombreTask}</strong>

                <div className="d-flex gap-1 align-items-center">
                    <span className="me-1">{task.numPomodoros} pomodoros</span>
                    {Array.from({ length: task.numPomodoros }).map((_, index) => (
                        <i className="fa-solid fa-apple-whole text-primary" key={index}></i>
                    ))}
                </div>

            </div>

            <div className="d-flex gap-2">
                <div className="d-flex flex-column align-items-end">
                    <div className="me-2">
                        <i className="fa-solid fa-circle-info" id={`taskInfo${task.id}`}></i>
                    </div>

                    <strong>{task.TimeInterval} min</strong>
                </div>

                <div className="d-flex align-items-center">
                    <button className="btn btn-danger text-white" onClick={()=>deleteTaskForGroup(idGrupo,task.id)}>
                        Quitar
                    </button>
                </div>

            </div>

        </div>

    </div>

}

