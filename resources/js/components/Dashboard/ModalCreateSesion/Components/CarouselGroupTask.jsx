import { useContext } from "react";
import { SelectGroup } from "../../Shared/SelectGroup";
import { createSessionContext } from "../../Context/ContextCreateSession";

export function CarouselGroupTask(){

    const {setFormSesion}=useContext(createSessionContext);

    const setGroupTaskList=(gruposSeleccionados)=>{
        const idsSelect=gruposSeleccionados.map((group=>group.id));
        setFormSesion(prevForm=>{
            return {
                ...prevForm,
                'GroupTask':idsSelect
            }
        })
    }
    return <div className="carousel-item">
        <div>
            <SelectGroup setListGroupTask={setGroupTaskList}/>
        </div>
    </div>
}
