
import { useContext } from "react";
import { TooltipTaskDetail } from "./TooltipTaskDetail"
import { useNavigate } from "react-router";
import { SesionContext } from "../Sections/Sesiones/Context/ContextSesion";


export function TaskBox({task,idSesion}){

    const {moveUpTask,moveDownTask,deleteTaskSesion}=useContext(SesionContext);

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

                <div className="d-flex flex-column justify-content-center gap-2">
                        <i class="fa-solid fa-square-caret-up text-success" style={{scale:"1.4"}} onClick={()=>moveUpTask(task.id)}></i>
                        <i class="fa-solid fa-square-caret-down text-success" style={{scale:"1.4"}} onClick={()=>moveDownTask(task.id)}></i>
                </div>


                <div className="d-flex align-items-center">
                    <button className="btn btn-danger text-white" onClick={()=>deleteTaskSesion(idSesion,task.id)}>
                        Quitar
                    </button>
                </div>
            </div>

        </div>
    </div>

}

