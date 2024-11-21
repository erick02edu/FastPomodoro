import { useContext, useState } from "react";
import { GroupTaskContext } from "../Context/ContextGroupTask";

export function BarraBusquedaGroup(){

    const [idInterval,setIdInterval]=useState(null);
    const {searchGroup,busqueda,setBusqueda}=useContext(GroupTaskContext)

    const handleKeyUp=(e)=>{

        if(idInterval){
            clearInterval(idInterval);
        }

        const id=setTimeout(()=>{
            searchGroup(e.target.value)
        },500)

        setIdInterval(id);
    }

    const handleOnChange=(e)=>{
        setBusqueda(e.target.value)
    }

    return <>
        <input type="text" className="form-control my-3" placeholder="Buscar grupo..."
        onKeyUp={handleKeyUp} onChange={handleOnChange} value={busqueda} />
    </>
}


