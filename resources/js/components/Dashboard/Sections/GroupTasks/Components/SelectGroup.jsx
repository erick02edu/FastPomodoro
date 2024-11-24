import { useEffect, useState } from "react";
import { BarraBusquedaGroup } from "./BarraBusquedaGroup"

export function SelectGroup(){

    const [SelectGroup,setSelectGroup]=useState([]);
    const [count,setCount]=useState(0);

    useEffect(()=>{
        //Evitar primera ejecución
        if(count>0){
            setTask(SelectTasks);
        }
        setCount(prevCount=>prevCount+1)
    },[SelectGroup])

    const deleteSelectGroup=(id)=>{
        setSelectGroup((prevGroup)=>(
            prevGroup.filter(group=>group.id!=id)
        ))
    }

    return  <div className=" rounded-2 mt-2 px-2 pt-1">
        { SelectGroup.length > 0 &&
            <div>
                <label className="form-label">Grupos seleccionadas:</label>
                <div className="d-flex flex-wrap gap-2">
                {
                    SelectGroup.map((group)=>(
                        <div className="d-flex gap-2 p-2 rounded-2 bg-body-secondary align-items-center" key={group.id}>
                            <span>{group.nameGroup}</span>
                            <div>
                                <i className="fa-solid fa-xmark" onClick={()=>deleteSelectGroup(group.id)}></i>
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
        }
        <div className="mt-2">
            <div className="d-flex justify-content-between align-items-center">
                <div className="flex-grow-1">Seleccionar grupos</div>
                <div>
                    <BarraBusquedaGroup/>
                </div>
            </div>
            <div className="border p-2 rounded-2 overflow-y-auto" id="sectionTasks" style={{height:'200px'}}>
            </div>
        </div>
    </div>
}



