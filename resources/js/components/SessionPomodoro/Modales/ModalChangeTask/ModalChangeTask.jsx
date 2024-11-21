import { useContext, useEffect, useState } from "react"
import { TaskContext } from "../../Context/ContextTask"

export function ModalChangeTask(){

    const {ListTaskPending,changeTaskCurrent,modalChangeTask,nextTask,setNextTask}=useContext(TaskContext)

    const [optionTaskId,setOptionTaskId]=useState(nextTask)

    useEffect(()=>{
        if(ListTaskPending[1]!=undefined){
            setOptionTaskId(ListTaskPending[1].id)
        }
    },[nextTask])

    const ActualizarTask=()=>{

        changeTaskCurrent(optionTaskId)

        setOptionTaskId(ListTaskPending[0].id)

        if(nextTask==optionTaskId){
            if(ListTaskPending[1]!=undefined){
                setNextTask(ListTaskPending[1].id)
            }
        }
        else{
            setOptionTaskId(ListTaskPending[0].id)
        }
    }

    const handleChange=(event)=>{
        setOptionTaskId(event.target.value)
    }

    return <div className="modal fade" id="modalChageTask" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true"
    data-bs-backdrop="static" data-bs-keyboard="false"
    ref={modalChangeTask}>
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content bg-body text-body">
                <div className="modal-header border-body m-auto">
                    <span className=" fs-3">Siguiente tarea</span>
                </div>
                <div className="modal-body p-5 w-100 d-flex flex-column flex-lg-row" style={{height:'60vh'}}>

                    <div className="w-100 align-self-center">
                        <span className="">Elige cual sera la siguiente tarea a realizar</span>
                        <select value={optionTaskId} className="mt-2 form-select select-none" onChange={handleChange}>
                            {
                                ListTaskPending.map((task)=>(
                                    <option key={task.id} selected={ListTaskPending[1]==task.id}
                                    value={task.id}>
                                        {task.NombreTask} / {task.numPomodoros } pomodoro / {task.TimeInterval} min
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    <div className="d-flex justify-content-center align-items-center w-100">

                            <img src={`${import.meta.env.VITE_API_URL}/img/CerebroPensando.png`} className="w-50" style={{height:"40vh"}} alt="Error"></img>

                    </div>
                </div>
                <div className="modal-footer border-body d-flex justify-content-center">
                    <button type="button" data-bs-dismiss="modal" className="btn btn-primary text-white"
                    onClick={ActualizarTask}>
                        Empezar
                    </button>
                </div>
            </div>
        </div>
    </div>
}
