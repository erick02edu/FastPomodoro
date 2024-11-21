import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { TaskContext } from "../Context/ContextTask";
import { TimerContext } from "../Context/ContextTimer";

const TaskPending=({task})=>{

    const {UpdateTask,deleteTask,ListTaskPending,TareaActual}=useContext(TaskContext)
    const {verifyHasMoreTasks}=useContext(TimerContext);
    const [nameTask, setNameTask] = useState(task.NombreTask);
    const [styleHover,setStyleHover]=useState('bg-transparent border-dark-secondary')
    const [CheckMark,setCheckMark]=useState(false);
    const InputTask=useRef(null)

    useEffect(()=>{
        var collapse=document.getElementById('collapseTaskPending').classList.contains('show')
        if(collapse==false){
            var btnAccordion = document.getElementById('btnCollapseTaskPending');
            btnAccordion.click()
        }
        focusInput()
    },[ListTaskPending])


    const checkTaskComplet = () => {
        verifyHasMoreTasks();
    };

    const handleInputChangeTask=(e)=>{
        setNameTask(e.target.value);
        UpdateTask(e.target.value,task.id)
    }

    const focusInput=()=>{
        InputTask.current.focus()
    }

    const HoverTaskOver=()=>{
        setStyleHover('bg-primary border-primary')
        setCheckMark(true)
    }

    const HoverTaskLeave=()=>{
        setStyleHover('bg-transparent border-dark-secondary')
        setCheckMark(false)
    }

    return <div className="d-flex flex-nowrap border border-dark-secondary py-2 px-2 rounded-3 shadow">

            {
                task.id==TareaActual.id ?
                <div className={`rounded-circle text-center ${styleHover} border  align-self-center`}
                    style={{width:'20px',height:'20px'}} onMouseOver={HoverTaskOver} onMouseLeave={HoverTaskLeave}
                    onClick={()=>checkTaskComplet()} >
                    { CheckMark ? <i className="fa-solid fa-check text-white"></i> : <></>}
                </div>
                : <></>
            }

            <input type="text" className={`rounded-3 custom-outline bg-transparent  border-0 align-self-end mx-2` }
            style={{width:'75%'}} value={nameTask}
            ref={InputTask} id={`InputTask_${task.id}`}
            onChange={handleInputChangeTask} disabled/>
            {/* <i className="fa-solid fa-pen text-body align-self-center mx-1" onClick={focusInput}></i>
            <i className="fa-solid fa-trash text-body align-self-center ms-2" onClick={()=>{deleteTask(task.id)}}></i> */}

    </div>
}

export default TaskPending;



