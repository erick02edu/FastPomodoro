import { useContext, useEffect } from "react";
import { TaskContext } from "../Context/ContextTask";

const TaskComplet=({task})=>{

    const {ListTaskComplet,deleteTaskComplet}=useContext(TaskContext)
    useEffect(()=>{
        var collapse=document.getElementById('collapseTaskComplet').classList.contains('show')
        if(collapse==false){
            var btnAccordion = document.getElementById('btnCollapseTaskComplet');
            if(btnAccordion){
                btnAccordion.click();
            }
        }
    },[ListTaskComplet])

    return <>
        <div className="d-flex flex-nowrap justify-content-between border border-dark-secondary py-2 px-2 rounded-3 shadow"pS>
            <input type="text" className='rounded-3 custom-outline bg-transparent border-0 align-self-end mx-2'
            style={{width:'75%'}} value={task.NombreTask} disabled
             />
            <i className="fa-solid fa-trash text-body align-self-center mx-2" onClick={()=>deleteTaskComplet(task.id)} ></i>
        </div>
    </>
}

export default TaskComplet;
