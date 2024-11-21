import { useContext, useEffect } from "react"
import TaskComplet from "./TaskComplet"
import { TaskContext } from "../Context/ContextTask"

export function ListCompletTask(){

    const {ListTaskComplet}=useContext(TaskContext)

    useEffect(()=>{
        console.log("Tareas completadas:")
        console.log(ListTaskComplet);
    },[ListTaskComplet])

    return <>
        <div className="accordion-item w-100">
            <h2 className="accordion-header">
            <button id="btnCollapseTaskComplet" className="accordion-button border-0 d-flex p-0 py-lg-3 w-100 rounded-2 border btn py-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTaskComplet" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                <div className='d-flex justify-content-between w-100'>
                    <div>
                        Tareas completadas
                    </div>
                    <i className="fa-solid fa-chevron-down ms-1"></i>
                </div>

            </button>
            </h2>
            <div id="collapseTaskComplet"  style={{maxHeight:"10em"}} className="accordion-collapse collapse show px-lg-4 mt-2 mt-lg-0">
                <ul className="accordion-body d-flex flex-column gap-2">
                {
                    ListTaskComplet.map((task)=>(
                        <TaskComplet key={task.id} task={task}/>
                    ))
                }
                </ul>

            </div>
        </div>
        {/* <div className="accordion" id="accordionExample z-5">
            <div className="text-white">
                <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button px-0 pe-1" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTaskComplet" aria-expanded="false"  id="btnCollapseTaskComplet">
                        Tareas completadas
                    </button>
                </h2>
                <div id="collapseTaskComplet" className="accordion-collapse collapse overflow-y-auto py-1" aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"  style={{maxHeight:"10em"}}>
                    <div className="accordion-body py-1 d-flex flex-column gap-2 ">
                        {
                            ListTaskComplet.map((task)=>(
                                <TaskComplet key={task.id} task={task}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div> */}
    </>
}

