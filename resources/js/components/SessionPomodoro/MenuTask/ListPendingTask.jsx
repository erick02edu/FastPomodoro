import TaskPending from "./TaskPending"
import { useContext } from "react"
import { TaskContext } from "../Context/ContextTask"

export function ListPendingTask(){

    const {ListTaskPending}=useContext(TaskContext)

    return <>

        <div className="accordion-item w-100">
            <h2 className="accordion-header">
            <button className="accordion-button border-0 d-flex p-0 py-lg-3 w-100 rounded-2 border btn py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTaskPending" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <div className='d-flex justify-content-between w-100'>
                    <div>
                        Tareas pendientes
                    </div>
                    <i className="fa-solid fa-chevron-down ms-1"></i>
                </div>

            </button>
            </h2>
            <div id="collapseTaskPending"  style={{maxHeight:"10em"}} className="accordion-collapse collapse show px-lg-4 mt-2 mt-lg-0">
                <ul className="accordion-body d-flex flex-column gap-2">
                {
                    ListTaskPending.length==0 ?
                    <span className="text-body">Sin tareas pendientes</span>
                    :ListTaskPending.map( (task)=>(
                        <TaskPending key={task.id} task={task}/>
                    ))
                }
                </ul>

            </div>
        </div>

        {/* <div className="accordion-item" id="accordionExample z-5" >
            <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button  px-0 pe-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTaskPending" aria-expanded="true" id="btnCollapseTaskPending" >
                    Tareas pendientes
                </button>
            </h2>
            <div id="collapseTaskPending" className="accordion-collapse collapse show overflow-y-auto py-1 m-0" aria-labelledby="headingOne"
            data-bs-parent="#accordionExample" style={{maxHeight:"10em"}}>
                <div className="accordion-body py-1 d-flex flex-column gap-2">
                {
                    ListTaskPending.length==0 ?
                    <span className="text-body">Sin tareas pendientes</span>
                    :ListTaskPending.map( (task)=>(
                        <TaskPending key={task.id} task={task}/>
                    ))
                }
                </div>
            </div>

        </div> */}
    </>
}
