import { useContext,useState } from "react";
import { taskContext } from "../Context/ContextTask";

export function BarraBusquedaTask({omitTask=[]}){

    const {searchTask,busqueda,setBusqueda}=useContext(taskContext);
    const [idInterval,setIdInterval]=useState(null)

    const handleKeyUp=(e)=>{
        if(idInterval){
            clearInterval(idInterval);
        }
        const id=setTimeout(()=>{

            searchTask(e.target.value,omitTask.map(task=>task.id))
        },500)
        setIdInterval(id);
    }

    const handleOnChange=(e)=>{
        setBusqueda(e.target.value)
    }

    return <>
        <input type="text" className="form-control my-3" placeholder="Buscar tarea ..."
        onKeyUp={handleKeyUp} onChange={handleOnChange} value={busqueda} />
    </>
}

